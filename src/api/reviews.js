import { api } from './api'

export const getReviews = (params) => api.get('reviews', { params })
export const addReview = (review) => api.post('reviews', review)
export const updateReview = (review) =>
  api.patch('reviews/' + review.id, { rating: review.rating, comment: review.comment })
export const deleteReview = (id) => api.delete('reviews/' + id)
