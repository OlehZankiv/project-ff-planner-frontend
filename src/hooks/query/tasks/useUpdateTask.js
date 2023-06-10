import { useMutation } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'

export const useUpdateTask = () => {
  const { mutate, isLoading } = useMutation(updateTask, {
    mutationKey: [queryKeys.updateTask],
  })

  return {
    updateTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
