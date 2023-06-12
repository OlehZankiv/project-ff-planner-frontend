import axios from 'axios'
import { ROUTES } from '../navigation/routes'
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
    if (error.response?.status === 401) {
      removeStorageItem(STORAGE_KEYS.TOKEN)
      removeStorageItem(STORAGE_KEYS.LOGGER)

      if (window.location.pathname === ROUTES.LANDING) return

      if (
        ![ROUTES.LOGIN, ROUTES.REGISTER].some((route) => window.location.pathname.includes(route))
      )
        return (window.location = ROUTES.LOGIN)
    }

    return Promise.reject(error)
  },
)
