import { LogInForm } from './components/LogInForm'
import { AuthWrapper } from './shared.styled'
import { gooseLogin } from '../../assets/images'
import { GooseImage } from './components/GooseImage'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => (
  <AuthWrapper>
    <GooseImage image={gooseLogin} alt='image of goose in a rocket' left={0} />
    <LogInForm />
    <ToastContainer />
  </AuthWrapper>
)

export default LoginPage
