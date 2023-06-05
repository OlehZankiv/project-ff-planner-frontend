import { Formik, ErrorMessage } from 'formik'
import { AuthNavigate } from '../AuthNavigate/AuthNavigate'
import { LoginAndRegisterButton } from '../LoginAndRegisterButton/LoginAndRegisterButton'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../navigation/routes'
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
  name: yup.string().required('name is a required field'),
  email: yup.string().email('email must be a valid email').required('email is a required field'),
  password: yup
    .string()
    .min(4, 'password must be at least 4 characters')
    .required('password is a required field'),
})

const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const RegisterForm = () => {
  const { t } = useTranslation()

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <FormStyled autoComplete='off'>
        <Title>{t('Sign up')}</Title>
        <LabelStyled>
          <NameOfFieldStyled>{t('Name')}</NameOfFieldStyled>
          <Input type='text' name='name' placeholder='Enter your name' />
          <ErrorMessage
            name='name'
            render={(msg) => <ErrorMessageStyled>{t(`${msg}`)}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LabelStyled>
          <NameOfFieldStyled>{t('Email')}</NameOfFieldStyled>
          <Input type='email' name='email' placeholder='Enter email' />
          <ErrorMessage
            name='email'
            render={(msg) => <ErrorMessageStyled>{t(`${msg}`)}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LabelStyled>
          <NameOfFieldStyled>{t('Password')}</NameOfFieldStyled>
          <Input type='password' name='password' placeholder='Enter password' />
          <ErrorMessage
            name='password'
            render={(msg) => <ErrorMessageStyled>{t(`${msg}`)}</ErrorMessageStyled>}
          />
        </LabelStyled>
        <LoginAndRegisterButton text={t('Sign Up')} />
        <AuthNavigate text={t('Log In')} route={ROUTES.LOGIN} />
      </FormStyled>
    </Formik>
  )
}
