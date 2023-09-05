import { LogInForm } from './components/LogInForm'
import { AuthWrapper } from './shared.styled'
import { gooseLogin } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { LanguagePicker } from '../../components/LanguagePicker'
import styled, { useTheme } from 'styled-components'
import { ROUTES } from '../../navigation/routes'
import { ArrowLeft } from '../../assets/icons'
import { useNavigate } from 'react-router-dom'
import { OpacityButton } from '../../components'

const LoginPage = () => {
  const { colors } = useTheme()

  const navigate = useNavigate()

  return (
    <AuthWrapper>
      <CloseIconWrapper onClick={() => navigate(ROUTES.LANDING)}>
        <ArrowLeft color={colors.text} />
      </CloseIconWrapper>
      <LanguagePicker color={colors.primary} style={{ position: 'absolute', right: 15, top: 15 }} />
      <GooseImage image={gooseLogin} alt='image of goose in a rocket' left={0} />
      <LogInForm />
    </AuthWrapper>
  )
}

export default LoginPage

const CloseIconWrapper = styled(OpacityButton)`
  position: absolute;
  top: 24px;
  left: 36px;
`
