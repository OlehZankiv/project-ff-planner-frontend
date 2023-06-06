import { useMutation } from '@tanstack/react-query'
import { register } from '../../../api'
import { queryKeys } from '../queryKeys'

export const useRegister = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.register],
    mutationFn: register,
    onError: () => {
      // Add error function if it will be needed
    },
    onSuccess: (res) => {
      console.log(res.data.user)
      // Add error function if it will be needed
    },
  })

  return {
    register: ({ password, name, email }) => mutate({ password, name, email }),
    isLoading,
  }
}
