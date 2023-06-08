import { useMutation } from '@tanstack/react-query'
import { register } from '../../../api'
import { queryKeys } from '../queryKeys'
import { registerError, registerSuccess } from '../../../pages/auth/components/notification'

export const useRegister = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.register],
    mutationFn: register,
    onError: (error) => {
      registerError(error)
      // TODO: Vitalii task: add error notification
    },
    onSuccess: (res) => {
      registerSuccess(res)
      console.log(res.data.user)
      // TODO: Vitalii task: add success notification
    },
  })

  return {
    register: ({ password, name, email }) => mutate({ password, name, email }),
    isLoading,
  }
}
