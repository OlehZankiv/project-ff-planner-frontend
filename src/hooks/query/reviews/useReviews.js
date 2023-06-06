import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { toReview } from '../mappers'
import { getReviews } from '../../../api/reviews'

export const useReviews = (type = 'all') => {
  const { isLoading, data: reviews = [] } = useQuery(
    [queryKeys.getReviews, type],
    () => getReviews(type),
    {
      select: (res) => res.data.map(toReview),
    },
  )

  return { isLoading, reviews }
}
