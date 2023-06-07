import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { getStorageItem, STORAGE_KEYS } from '../utils/storage'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = getStorageItem(STORAGE_KEYS.TOKEN)
  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})
