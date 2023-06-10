import { useMutation } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteTask } from '../../../api'

export const useDeleteTask = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.deleteTask],
    mutationFn: deleteTask,
  })

  return {
    deleteTask: mutate,
    isLoading,
  }
}
