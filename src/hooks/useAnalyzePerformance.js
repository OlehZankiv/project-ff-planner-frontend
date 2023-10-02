import { useEffect, useState } from 'react'
import { useAuthContext } from '../contexts/auth'
import { getTasks } from '../api'
import { toTask } from './query/mappers'
import * as tf from '@tensorflow/tfjs'

const toTaskData = (task) => ({
  category: task.category === 'to-do' ? 0 : task.category === 'done' ? 1 : 0.5,
  priority: task.priority === 'high' ? 0.25 : task.priority === 'medium' ? 0.5 : 1,
  deadline: (task.deadline - task.startAt) / 1000 / 60,
  finishedInDeadline: task.finishedInDeadline,
})

const toTaskValues = ({ category, deadline, priority }) => [category, deadline, priority]

export const useAnalyzePerformance = () => {
  const [isLoading, setLoading] = useState(false)
  const [analyzeInfo, setAnalyzeInfo] = useState(null)
  const [tasksForAnalyze, setTasksForAnalyze] = useState(null)

  const { logger } = useAuthContext()

  useEffect(() => {
    setLoading(true)

    getTasks({
      filterBy: 'range',
      startDate: new Date(logger.startDate).getTime(),
      endDate: new Date(logger.endDate).getTime(),
    })
      .then(({ data }) => data.map(toTask).map(toTaskData))
      .then((tasks) =>
        setTasksForAnalyze({
          tasksData: tasks.map(toTaskValues),
          tasksResult: tasks.map(({ finishedInDeadline }) => finishedInDeadline),
        }),
      )
      .finally(() => setLoading(false))
  }, [logger.startDate, logger.endDate])

  const handleAnalyze = async (task) => {
    if (!tasksForAnalyze?.tasksData?.length) return

    setLoading(true)

    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 64, inputShape: [3], activation: 'relu' }))
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }))
    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] })
    const epochs = 200

    await model.fit(
      tf.tensor2d(tasksForAnalyze.tasksData),
      tf.tensor1d(tasksForAnalyze.tasksResult),
      { epochs: epochs },
    )

    const newTaskValues = toTaskValues(toTaskData(task))
    const predictValue = model.predict(tf.tensor2d([newTaskValues], [1, 3])).dataSync()[0]

    const coefficient = predictValue + logger.productivity / 5

    setAnalyzeInfo(Math.round((coefficient > 1 ? 1 : coefficient) * 100) / 100)

    setLoading(false)
  }

  const reset = () => {
    setAnalyzeInfo(null)
    setLoading(false)
  }

  return {
    analyzeInfo,
    isLoading,
    handleAnalyze,
    reset,
  }
}
