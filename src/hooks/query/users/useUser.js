import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getUser } from '../../../api/'
import { toUser } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'
import { useAuthContext } from '../../../contexts/auth'

export const useUser = (id = '') => {
  const { token } = useAuthContext()

  const {
    isLoading,
    isFetching,
    data: user = null,
  } = useQuery([queryKeys.getUsers, id, token], () => getUser(id), {
    onError: handleRequestError,
    select: (res) => toUser(res.data.user),
    enabled: !!id && !!token,
  })

  return {
    user,
    isLoading: isLoading || isFetching,
  }
}
