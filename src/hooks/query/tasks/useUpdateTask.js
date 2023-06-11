import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateTask, {
    mutationKey: [queryKeys.updateTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
    },
    onError: handleRequestError,
  })

  return {
    updateTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
