import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(createTask, {
    mutationKey: [queryKeys.createTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
    },
  })

  return {
    createTask: (task) => {
      // eslint-disable-next-line no-unused-vars
      const { _id, assignedUser, ...data } = toTaskDTO(task)
      mutate(data)
    },
    isLoading,
  }
}
