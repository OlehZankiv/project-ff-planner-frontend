import { NavigateButtonStyled } from "./NavigateButtonStyled"

export const AuthNavigate = ({ text, route }) => {
  return <NavigateButtonStyled to={route}>{text}</NavigateButtonStyled>
}