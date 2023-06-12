import { api } from './api'

export const getUser = (id) => api.get('users/' + id)

export const updateUser = (id, params) => api.patch('users/' + id, params)

export const updateUserAvatar = (avatar) => {
  const formData = new FormData()
  formData.append('avatar', avatar)

  return api.patch('users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}
