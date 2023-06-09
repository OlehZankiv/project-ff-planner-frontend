import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { getStorageItem, removeStorageItem, STORAGE_KEYS } from '../utils/storage'

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeStorageItem(STORAGE_KEYS.TOKEN)
      removeStorageItem(STORAGE_KEYS.LOGGER)

      // if (!window.location.pathname.includes(ROUTES.LOGIN))
      //   return (window.location = BASE_GITHUB_PAGES_URL + ROUTES.LOGIN)
    }

    return Promise.reject(error)
  },
)
