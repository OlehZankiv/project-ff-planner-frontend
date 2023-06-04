import { Formik, ErrorMessage } from 'formik'
import { AuthNavigate } from '../AuthNavigate/AuthNavigate'
import { LoginAndRegisterButton } from '../LoginAndRegisterButton/LoginAndRegisterButton'
import {
  ErrorMessageStyled,
  FormStyled,
  Input,
  NameOfFieldStyled,
  Title,
  LabelStyled,
} from './RegisterFormStyled'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
})

const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <FormStyled autoComplete='off'>
        <Title>Sign up</Title>
        <LabelStyled>
          <NameOfFieldStyled>Name</NameOfFieldStyled>
          <Input type='text' name='name' placeholder='Enter your name' />
          <ErrorMessage
            name='name'
            render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LabelStyled>
          <NameOfFieldStyled>Email</NameOfFieldStyled>
          <Input type='email' name='email' placeholder='Enter email' />
          <ErrorMessage
            name='email'
            render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LabelStyled>
          <NameOfFieldStyled>Password</NameOfFieldStyled>
          <Input type='password' name='password' placeholder='Enter password' />
          <ErrorMessage
            name='password'
            render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LoginAndRegisterButton text='Sign Up' />
        <AuthNavigate text='Log In' route='/login'/>
      </FormStyled>
    </Formik>
  )
}
