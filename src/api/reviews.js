import { api } from './api'

export const getReviews = (params) => api.get('reviews', { params })
