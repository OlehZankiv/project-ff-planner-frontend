import { useMutation } from '@tanstack/react-query'
import { createTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'

export const useCreateTask = () => {
  const { mutate, isLoading } = useMutation(createTask, {
    mutationKey: [queryKeys.createTask],
  })

  return {
    createTask: (task) => mutate(toTaskDTO(task)),
    isLoading,
  }
}
