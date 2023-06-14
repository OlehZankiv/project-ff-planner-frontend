import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toTaskDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'
import { useTranslation } from 'react-i18next'

export const useCreateTask = (onSuccess) => {
  const { t } = useTranslation()

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
    createTask: (task) => {
      if (task.startAt >= task.endAt) {
        handleRequestError({ message: t('End time should be later than start time') })
        return
      }

      mutate(toTaskDTO(task))
    },
    isLoading,
  }
}
