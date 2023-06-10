import { useMutation } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteTask } from '../../../api'

export const useDeleteTask = () => {
  const { mutate, isLoading } = useMutation(deleteTask, {
    mutationKey: [queryKeys.deleteTask],
  })

  return {
    deleteTask: mutate,
    isLoading,
  }
}
