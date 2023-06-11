import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateTask, {
    mutationKey: [queryKeys.updateTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
    },
  })

  return {
    updateTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
