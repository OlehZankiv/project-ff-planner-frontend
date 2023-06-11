import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getUser } from '../../../api/'
import { toUser } from '../mappers'

export const useUser = (id) => {
  const { isLoading, data: user = null } = useQuery(
    [queryKeys.getUsers, id],
    () => id && getUser(id),
    {
      select: (res) => toUser(res.data.user),
    },
  )

  return {
    user,
    isLoading,
  }
}
