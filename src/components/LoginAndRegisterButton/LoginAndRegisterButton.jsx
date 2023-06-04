import { ButtonItem } from './ButtonItem.styled'
import {ReactComponent as Icon} from '../../assets/icons/log-in-icon.svg'

export const LoginAndRegisterButton = ({ text }) => {
  return (
    <ButtonItem type='submit'>
      {text}
      <Icon />
    </ButtonItem>
  )
}