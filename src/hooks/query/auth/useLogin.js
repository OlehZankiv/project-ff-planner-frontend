import { useMutation } from '@tanstack/react-query'
import { login } from '../../../api'
import { queryKeys } from '../queryKeys'
import { useAuthContext } from '../../../contexts/auth'
import { toUser } from '../mappers'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../navigation/routes'
import { handleRequestError } from '../../../components/helpers/handleReaquestNotification'

export const useLogin = () => {
  const { setLogger, setToken } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  const { mutate, isLoading, isFetching } = useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: login,
    onError: (error) => {
      handleRequestError(error)
    },
    onSuccess: (res) => {
      const { token, user } = res.data

      setToken(token)
      setLogger(toUser(user))

      navigate(location.state?.from?.pathname || ROUTES.CALENDAR)
    },
  })

  return {
    login: ({ password, email }) => mutate({ password, email }),
    isLoading: isLoading || isFetching,
  }
}
