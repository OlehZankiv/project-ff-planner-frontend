import { useMutation } from '@tanstack/react-query'
import { updateUser } from '../../../api'
import { queryKeys } from '../queryKeys'
import { useAuthContext } from '../../../contexts/auth'

export const useUpdateTheme = () => {
  const { logger } = useAuthContext()
  const { id } = logger

  const { mutate } = useMutation((data) => updateUser(id, { ...data }), {
    mutationKey: [queryKeys.updateTheme],
    onError: () => {
      // TODO: Vitalii task: add error notification
    },
    onSuccess: () => {},
  })

  return {
    updateTheme: ({ theme }) => mutate({ theme }),
  }
}
