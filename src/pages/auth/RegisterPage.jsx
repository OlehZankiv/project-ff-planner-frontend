import { RegisterForm } from './components/RegisterForm'
import { gooseRegister } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { AuthWrapper } from './shared.styled'
import { LanguagePicker } from '../../components/LanguagePicker'
import styled, { useTheme } from 'styled-components'
import { ROUTES } from '../../navigation/routes'
import { ArrowLeft } from '../../assets/icons'
import { useNavigate } from 'react-router-dom'
import { OpacityButton } from '../../components'

const RegisterPage = () => {
  const { colors } = useTheme()
  const navigate = useNavigate()

  return (
    <AuthWrapper>
      <CloseIconWrapper onClick={() => navigate(ROUTES.LANDING)}>
        <ArrowLeft color={colors.text} />
      </CloseIconWrapper>
      <LanguagePicker color={colors.primary} style={{ position: 'absolute', right: 15, top: 15 }} />
      <GooseImage image={gooseRegister} alt='image of goose' right={0} />
      <RegisterForm />
    </AuthWrapper>
  )
}

export default RegisterPage

const CloseIconWrapper = styled(OpacityButton)`
  position: absolute;
  top: 24px;
  left: 36px;
`
