import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'
import { useTranslation } from 'react-i18next'

export const useUpdateTask = (id, onSuccess) => {
  const { t } = useTranslation()

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateTask, {
    mutationKey: [queryKeys.updateTask],
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getTasks])
      onSuccess?.()
    },
    onError: handleRequestError,
  })

  return {
    updateTask: (task) => {
      if (task.startAt >= task.endAt) {
        handleRequestError({ message: t('End time should be later than start time') })
        return
      }

      mutate(toTaskDTO({ ...task, id }))
    },
    updateCategory: (category) => mutate({ category, _id: id }),
    isLoading,
  }
}
