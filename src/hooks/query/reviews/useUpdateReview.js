import { QueryClient, useMutation } from '@tanstack/react-query'
import { updateReview } from '../../../api'
import { queryKeys } from '../queryKeys'

export const useUpdateReview = () => {
  const { mutate, isLoading } = useMutation(updateReview, {
    mutationKey: [queryKeys.updateReview],

    onSuccess: () => {
      QueryClient.invalidateQueries([queryKeys.getReviews])
    },
  })

  return {
    updateReview: (review) => {
      mutate(review)
    },
    isLoading,
  }
}
