import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getUser } from '../../../api/users'
import { toUser } from '../mappers'

export const useUser = (id) => {
  const { isLoading, data: user = null } = useQuery([queryKeys.getUsers], () => getUser(id), {
    select: (res) => toUser(res.data.user),
    enabled: !!id,
  })

  return {
    user,
    isLoading,
  }
}
