import { useMutation } from '@tanstack/react-query'
import { login as loginRequest } from '../../../api'
import { queryKeys } from '../queryKeys'

// TODO: Implement login functionality
export const useLogin = (onSuccess) => {
  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: loginRequest,
    onError: () => {
      // Add error function if it will be needed
    },
    onSuccess,
  })

  return {
    login: ({ email, password }) => mutate({ email, password }),
    isLoading,
  }
}
