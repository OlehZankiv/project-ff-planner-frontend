import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
