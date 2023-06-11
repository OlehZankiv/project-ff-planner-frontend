import { api } from './api'

export const getReviews = (params) => api.get('reviews/', { params })
export const addReview = (review) => api.post('reviews/', review)
export const updateReview = ({ _id, ...review }) => api.patch('reviews/' + _id, review)
export const deleteReview = (id) => api.delete('reviews/' + id)
