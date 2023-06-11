import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getTasks } from '../../../api/'
import { toTask } from '../mappers'

export const useTasks = () => {
  const { isLoading, data: tasks = [] } = useQuery([queryKeys.getTasks], () => getTasks(), {
    select: (res) => res.data.map(toTask),
  })

  return { isLoading, tasks }
}
