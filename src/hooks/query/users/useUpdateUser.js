import { useMutation } from '@tanstack/react-query'
import { updateUser } from '../../../api'
import { queryKeys } from '../queryKeys'
import { useAuthContext } from '../../../contexts/auth'

export const useUpdateUser = () => {
  const { setLogger, logger } = useAuthContext()
  const { id } = logger

  const { mutate, isLoading } = useMutation((data) => updateUser(id, { ...data }), {
    mutationKey: [queryKeys.updateUser],
    onError: () => {
      // TODO: Vitalii task: add error notification
    },
    onSuccess: (res) => {
      const { user } = res.data
      setLogger(user)
    },
  })

  return {
    updateUser: (data) => mutate({ ...data }),
    isLoading,
  }
}
