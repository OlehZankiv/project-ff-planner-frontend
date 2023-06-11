import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addReview } from '../../../api'
import { queryKeys } from '../queryKeys'
import { toNewReviewDTO } from '../mappers'

export const useAddReview = () => {
  const QueryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(addReview, {
    mutationKey: [queryKeys.addReview],

    onSuccess: () => {
      QueryClient.invalidateQueries([queryKeys.getReviews])
    },
  })

  return {
    addReview: (review) => mutate(toNewReviewDTO(review)),
    isLoading,
  }
}
