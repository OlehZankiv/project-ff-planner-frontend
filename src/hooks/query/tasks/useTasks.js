import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getTasks } from '../../../api/'
import { toTask } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useTasks = () => {
  const { isLoading, data: tasks = [] } = useQuery([queryKeys.getTasks], () => getTasks(), {
    select: (res) => res.data.map(toTask),
    onError: handleRequestError,
  })

  return { isLoading, tasks }
}
