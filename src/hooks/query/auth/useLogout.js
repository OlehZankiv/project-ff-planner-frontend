import { useMutation } from '@tanstack/react-query'
import { logout } from '../../../api'
import { queryKeys } from '../queryKeys'
import { removeStorageItem, STORAGE_KEYS } from '../../../utils/storage'
import { useAuthContext } from '../../../contexts/auth'

export const useLogout = () => {
  const { setToken, setLogger } = useAuthContext()

  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.logout],
    mutationFn: logout,
    onError: () => {
      // Add error function if it will be needed
    },
    onSuccess: () => {
      setToken(null)
      setLogger(null)
      removeStorageItem(STORAGE_KEYS.TOKEN)
    },
  })

  return {
    logout: mutate,
    isLoading,
  }
}
