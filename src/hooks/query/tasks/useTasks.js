import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getTasks } from '../../../api/'
import { toTask } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useTasks = (filter = 'month', date) => {
  const { isLoading, data: tasks = [] } = useQuery(
    [queryKeys.getTasks, filter, date],
    () => getTasks({ filter, date }),
    {
      select: (res) => res.data.map(toTask),
      onError: handleRequestError,
      enabled: !!date,
    },
  )

  return { isLoading, tasks }
}
