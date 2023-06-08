import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { en } from '../../../localization/strings/en'

export const loginError = () => {
    toast.error(en['Wrong email or password!'], {
    position: toast.POSITION.TOP_LEFT,
  })
}

export const registerError = () => {
    toast.error(en['Ooops! Try again'], {
    position: toast.POSITION.TOP_LEFT,
  })
}

export const registerSuccess = () => {
  toast.success(en['We send a verify letter to your email!'], {
    position: toast.POSITION.TOP_LEFT,
  })
}
