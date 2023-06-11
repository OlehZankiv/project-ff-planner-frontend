import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addReview } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toReviewDTO } from '../mappers'

export const useAddReview = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(addReview, {
    mutationKey: [queryKeys.addReview],
    onSuccess: () => queryClient.invalidateQueries([queryKeys.getReviews]),
  })

  return {
    addReview: (review) => mutate(toReviewDTO(review)),
    isLoading,
  }
}
