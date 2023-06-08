import { RegisterForm } from './components/RegisterForm'
import { gooseRegister } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { AuthWrapper } from './shared.styled'
import { ToastContainer } from 'react-toastify'

const RegisterPage = () => (
  <AuthWrapper>
    <GooseImage image={gooseRegister} alt='image of goose' right={0} />
    <RegisterForm />
    <ToastContainer />
  </AuthWrapper>
)

export default RegisterPage
