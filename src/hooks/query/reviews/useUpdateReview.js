import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateReview } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toReviewDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useUpdateReview = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(updateReview, {
    mutationKey: [queryKeys.updateReview],
    onError: handleRequestError,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getReviews])
      onSuccess?.()
    },
  })

  return {
    updateReview: (review) => mutate(toReviewDTO(review)),
    isLoading,
  }
}
