import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteReview } from '../../../api'
import { handleRequestError } from '../../../utils/notifications'

export const useDeleteReview = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(deleteReview, {
    mutationKey: [queryKeys.deleteReview],
    onError: handleRequestError,

    onSuccess: () => queryClient.invalidateQueries([queryKeys.getReviews]),
  })

  return {
    deleteReview: mutate,
    isLoading,
  }
}
