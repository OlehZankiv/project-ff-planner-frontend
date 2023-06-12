import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getTasks } from '../../../api/'
import { toTask } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useTasks = (filterBy = 'month', date) => {
  const { isLoading, data: tasks = [] } = useQuery(
    [queryKeys.getTasks, filterBy, date],
    () => getTasks({ filterBy, date }),
    {
      select: (res) => res.data.map(toTask),
      onError: handleRequestError,
      enabled: !!date,
    },
  )

  return { isLoading, tasks }
}
