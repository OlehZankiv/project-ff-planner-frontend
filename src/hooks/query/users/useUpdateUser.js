import { useMutation } from '@tanstack/react-query'
import { updateUser } from '../../../api'
import { queryKeys } from '../queryKeys'
import { useAuthContext } from '../../../contexts/auth'

export const useUpdateUser = () => {
  const { logger } = useAuthContext()
  const id = logger?.id || ''
  const { mutate, isLoading } = useMutation((data) => updateUser(id, data), {
    mutationKey: [queryKeys.updateUser, id],
    enabled: !!id,
  })

  return {
    updateTheme: (theme) => mutate({ theme }),
    updateUser: mutate,
    isLoading,
  }
}
