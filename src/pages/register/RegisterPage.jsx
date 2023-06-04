// TODO: Implement Login Page
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import { ImageOfGoose } from './ImageOfGoose'
import { Wrapper } from './RegisterPageStyled'
import gooseTrackImage from '../../assets/images/gooseTrackImage.png';
import gooseTrackImage2x from '../../assets/images/gooseTrackImage@2x.png'
import { useDimensions } from '../../hooks'
import { sizes } from '../../styles/breakpoints'

const RegisterPage = ({ }) => {
  const { width } = useDimensions()

  return (
    <Wrapper>
      <ImageOfGoose
        style={{ width: `calc(25vw * (${width} / ${sizes.desktop}))` }}
        srcSet={`${gooseTrackImage} 1x, ${gooseTrackImage2x} 2x`}
        src={gooseTrackImage}
        alt='image goose track'
      />
      <RegisterForm />
    </Wrapper>
  )
}

export default RegisterPage
