import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { deleteReview } from '../../../api'

export const useDeleteReview = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(deleteReview, {
    mutationKey: [queryKeys.deleteReview],
    onSuccess: () => queryClient.invalidateQueries([queryKeys.getReviews]),
  })

  return {
    deleteReview: mutate,
    isLoading,
  }
}
