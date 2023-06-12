import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useUpdateTask = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation((data) => updateTask(data.task, data.id), {
    mutationKey: [queryKeys.updateTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
      onSuccess?.()
    },
    onError: handleRequestError,
  })

  const updateTaskWithDTO = (task) => {
    const taskDTO = toTaskDTO(task)
    mutate({ task: taskDTO, id: task.id })
  }

  const updateCategory = (category, id) => {
    mutate({ task: { category }, id })
  }

  return {
    updateTask: updateTaskWithDTO,
    updateCategory,
    isLoading,
  }
}
