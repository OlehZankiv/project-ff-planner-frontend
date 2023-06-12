import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { getUser } from '../../../api/'
import { toUser } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useUser = (id = '') => {
  const {
    isLoading,
    isFetching,
    data: user = null,
  } = useQuery([queryKeys.getUsers, id], () => getUser(id), {
    onError: handleRequestError,
    select: (res) => toUser(res.data.user),
    enabled: !!id,
  })

  return {
    user,
    isLoading: isLoading || isFetching,
  }
}
