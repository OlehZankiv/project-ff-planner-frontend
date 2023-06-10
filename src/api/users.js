import { api } from './api'

export const getUser = (id) => api.get('users/' + id)
export const updateUser = (id, params) => api.patch('users/' + id, params)
