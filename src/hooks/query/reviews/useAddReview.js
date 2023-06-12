import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addReview } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toReviewDTO } from '../mappers'
import { handleRequestError } from '../../../utils/notifications'

export const useAddReview = (onSuccess) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(addReview, {
    mutationKey: [queryKeys.addReview],
    onError: handleRequestError,

    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getReviews])
      onSuccess?.()
    },
  })

  return {
    addReview: (review) => mutate(toReviewDTO(review)),
    isLoading,
  }
}
