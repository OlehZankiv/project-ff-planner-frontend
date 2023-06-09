import { api } from './api'

export const getUser = (id) => api.get('users/' + id)
