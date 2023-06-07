import { api } from './api'

export const login = (params) => api.post('users/login', params)

export const register = (params) => api.post('users/register', params)

export const logout = () => api.post('users/logout')
