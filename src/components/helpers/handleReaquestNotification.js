import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export const handleRequestError = ({ message }) => {

  return toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
  })
}

export const handleRequestSuccess = (message) => {
  return toast.success(message, {
    position: toast.POSITION.TOP_LEFT,
  })
}
