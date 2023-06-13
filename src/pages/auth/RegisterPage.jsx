import { RegisterForm } from './components/RegisterForm'
import { gooseRegister } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { AuthWrapper } from './shared.styled'
import { LanguagePicker } from '../../components/LanguagePicker'
import { useTheme } from 'styled-components'

const RegisterPage = () => {
  const { colors } = useTheme()
  return (
    <AuthWrapper>
      <LanguagePicker
        color={colors.white}
        fontSize={18}
        style={{ position: 'absolute', right: 15, top: 15 }}
      />
      <GooseImage image={gooseRegister} alt='image of goose' right={0} />
      <RegisterForm />
    </AuthWrapper>
  )
}

export default RegisterPage
