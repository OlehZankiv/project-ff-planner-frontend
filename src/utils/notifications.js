import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export const handleRequestError = (error) => {
  toast.error(
    error?.response?.data?.message ?? error?.message ?? 'Developers forgot to handle this error',
    {
      position: toast.POSITION.TOP_LEFT,
    },
  )
}

export const handleRequestSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_LEFT,
  })
}
