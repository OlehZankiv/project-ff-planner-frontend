import { LogInForm } from './components/LogInForm'
import { Wrapper } from './Wrapper.styled'
import { gooseTrackRocket, gooseTrackRocket2x } from '../../assets/images'
import { GooseImage } from './components/GooseImage'

const LoginPage = ({}) => {
  return (
    <Wrapper>
      <GooseImage
        image1x={gooseTrackRocket}
        image2x={gooseTrackRocket2x}
        text='image of goose in a rocket'
        right='0'
      />
      <LogInForm />
    </Wrapper>
  )
}

export default LoginPage
