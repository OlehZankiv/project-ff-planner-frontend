import { useMutation } from '@tanstack/react-query'
import { logout } from '../../../api'
import { queryKeys } from '../queryKeys'
import { removeStorageItem, STORAGE_KEYS } from '../../../utils/storage'
import { useAuthContext } from '../../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../navigation/routes'

export const useLogout = () => {
  const { setToken, setLogger } = useAuthContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(logout, {
    mutationKey: [queryKeys.logout],
    onSuccess: () => {
      setToken(null)
      setLogger(null)

      removeStorageItem(STORAGE_KEYS.TOKEN)
      removeStorageItem(STORAGE_KEYS.LOGGER)
      navigate(ROUTES.LOGIN)
    },
  })

  return {
    logout: mutate,
    isLoading,
  }
}
