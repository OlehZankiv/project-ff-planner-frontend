import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteTask } from '../../../api'
import { handleRequestError } from '../../../utils/notifications'

export const useDeleteTask = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(deleteTask, {
    mutationKey: [queryKeys.deleteTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
      onSuccess?.()
    },
    onError: handleRequestError,
  })

  return {
    deleteTask: mutate,
    isLoading,
  }
}
