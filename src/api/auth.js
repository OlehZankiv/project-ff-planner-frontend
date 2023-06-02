import { api } from './api'

// TODO: Update it when BE will provide endpoints

export const login = ({ email, password }) => api.post('login', { email, password })

export const logout = () => api.post('logout')

export const register = () => api.post('register')
