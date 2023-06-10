import { useMutation } from '@tanstack/react-query'
import { register } from '../../../api'
import { queryKeys } from '../queryKeys'

export const useRegister = () => {
  const { mutate, isLoading } = useMutation(register, {
    mutationKey: [queryKeys.register],
    onError: () => {
      // TODO: Vitalii task: add error notification
    },
    onSuccess: (res) => {
      console.log(res.data.user)
      // TODO: Vitalii task: add success notification
    },
  })

  return {
    register: ({ password, name, email }) => mutate({ password, name, email }),
    isLoading,
  }
}
