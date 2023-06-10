import { RegisterForm } from './components/RegisterForm'
import { gooseRegister } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { AuthWrapper } from './shared.styled'

const RegisterPage = () => (
  <AuthWrapper>
    <GooseImage image={gooseRegister} alt='image of goose' right={0} />
    <RegisterForm />
  </AuthWrapper>
)

export default RegisterPage
