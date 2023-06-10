import { useMutation } from '@tanstack/react-query'
import { createTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'

export const useCreateTask = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.createTask],
    mutationFn: createTask,
  })

  return {
    createTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
