import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useUpdateTask = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateTask, {
    mutationKey: [queryKeys.updateTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
      onSuccess?.()
    },
    onError: handleRequestError,
  })

  return {
    updateTask: (task, id) => mutate(toTaskDTO({ ...task, id })),
    updateCategory: (category, id) => mutate({ category, _id: id }),
    isLoading,
  }
}
