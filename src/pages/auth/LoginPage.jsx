import { LogInForm } from './components/LogInForm'
import { AuthWrapper } from './shared.styled'
import { gooseLogin } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { LanguagePicker } from '../../components/LanguagePicker'
import { useTheme } from 'styled-components'

const LoginPage = () => {
  const { colors } = useTheme()
  return (
    <AuthWrapper>
      <LanguagePicker
        color={colors.white}
        fontSize={18}
        style={{ position: 'absolute', right: 15, top: 15 }}
      />
      <GooseImage image={gooseLogin} alt='image of goose in a rocket' left={0} />
      <LogInForm />
    </AuthWrapper>
  )
}

export default LoginPage
