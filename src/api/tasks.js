import { api } from './api'

export const getTasks = (params) => api.get('tasks/', { params })
export const createTask = (task) => api.post('tasks/', task)
export const updateTask = (task) => api.patch('tasks/', task)
export const deleteTask = (id) => api.delete('tasks/' + id)
