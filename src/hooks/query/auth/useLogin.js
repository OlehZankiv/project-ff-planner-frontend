import { useMutation } from '@tanstack/react-query'
import { login as loginRequest } from '../../../api'

// TODO: Implement login functionality
export const useLogin = (onSuccess) => {
  const { mutate, isLoading } = useMutation({
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
