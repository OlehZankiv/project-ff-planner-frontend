import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useCreateTask = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(createTask, {
    mutationKey: [queryKeys.createTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
      onSuccess?.()
    },
    onError: handleRequestError,
  })

  return {
    createTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
