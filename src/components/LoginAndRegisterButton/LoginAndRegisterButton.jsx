import { ButtonItem } from './ButtonItem.styled'
import { LoginIcon } from '../../assets/icons'

export const LoginAndRegisterButton = ({ text }) => {
  return (
    <ButtonItem type='submit'>
      {text}
      <LoginIcon />
    </ButtonItem>
  )
}