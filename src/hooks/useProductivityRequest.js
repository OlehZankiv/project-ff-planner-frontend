import { useState } from 'react'
import { useUpdateUser } from './query'
import { getTasks } from '../api'
import { toTask } from './query/mappers'
import { average, normalize } from '../utils/numbers'

const finishedInTimeWeight = 0.3
const deadlineWeight = 0.2
const priorityWeight = 0.1
const categoryWeight = 0.4

const getTaskValue = (value, weight, reverse) =>
  Math.round((reverse ? 1 - value : value) * weight * 100) / 100
const getPriorityNumberValue = (priority) =>
  priority === 'low' ? 0.33 : priority === 'medium' ? 0.66 : 1
const getCategoryNumberValue = (category) =>
  category === 'to-do' ? 0 : category === 'in-progress' ? 0.25 : 1

export const useProductivityRequest = () => {
  const [isLoading, setLoading] = useState(false)

  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateUser()

  const calculateProductivity = async (userData) => {
    setLoading(true)

    const tasks = await getTasks({
      filterBy: 'range',
      startDate: new Date(userData.startDate).getTime(),
      endDate: new Date(userData.endDate).getTime(),
    }).then(({ data }) => data.map(toTask))

    const values = [
      {
        values: tasks.map((task) =>
          !!task.finishedAt && task.finishedAt <= task.deadline
            ? 1
            : !task.finishedAt && task.deadline >= new Date()
            ? 0.5
            : 0,
        ),
        weight: finishedInTimeWeight,
        reverse: true,
      },
      {
        values: tasks.map((task) => task.deadline - task.createdAt),
        weight: deadlineWeight,
      },
      {
        values: tasks.map((task) => getPriorityNumberValue(task.priority)),
        weight: priorityWeight,
      },
      {
        values: tasks.map((task) => getCategoryNumberValue(task.category)),
        weight: categoryWeight,
      },
    ].filter((score) => score.values.length)

    const normalizedValues = values.map(({ values, weight, reverse }) =>
      normalize(values).map((value) => getTaskValue(value, weight, reverse)),
    )

    const productivityScore =
      average(tasks.map((_, i) => normalizedValues.reduce((acc, current) => acc + current[i], 0))) /
      values.reduce((acc, current) => acc + current.weight, 0)

    const productivityCoefficient = Math.min(1, Math.max(0, productivityScore))

    await updateUser({ ...userData, productivity: Math.round(productivityCoefficient * 100) / 100 })

    setLoading(false)
  }

  return {
    isLoading: isLoading || isUpdateUserLoading,
    calculateProductivity,
  }
}
