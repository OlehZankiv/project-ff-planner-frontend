import { QueryClient, useMutation } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteReview } from '../../../api'

export const useDeleteReview = () => {
  const { mutate, isLoading } = useMutation(deleteReview, {
    mutationKey: [queryKeys.deleteReview],

    onSuccess: () => {
      QueryClient.invalidateQueries([queryKeys.getReviews])
    },
  })

  return {
    deleteReview: mutate,
    isLoading,
  }
}