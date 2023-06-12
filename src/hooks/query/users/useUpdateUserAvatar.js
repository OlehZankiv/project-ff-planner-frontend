import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUserAvatar } from '../../../api'
import { queryKeys } from '../queryKeys'
import { handleRequestError } from '../../../utils/notifications'

export const useUpdateUserAvatar = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateUserAvatar, {
    mutationKey: [queryKeys.updateUserAvatar],
    onError: handleRequestError,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getUsers])
      onSuccess?.()
    },
  })

  return {
    updateUserAvatar: mutate,
    isLoading,
  }
}
