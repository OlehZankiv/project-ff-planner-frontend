import { useMutation } from '@tanstack/react-query'
import { login } from '../../../api'
import { queryKeys } from '../queryKeys'
import { useAuthContext } from '../../../contexts/auth'
import { toUser } from '../mappers'

export const useLogin = () => {
  const { setLogger, setToken } = useAuthContext()

  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: login,
    onError: () => {
      // Add error function if it will be needed
    },
    onSuccess: (res) => {
      const { token, user } = res.data

      setToken(token)
      setLogger(toUser(user))
    },
  })

  return {
    login: ({ password, email }) => mutate({ password, email }),
    isLoading,
  }
}
