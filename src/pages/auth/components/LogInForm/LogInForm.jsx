import { Formik, ErrorMessage } from 'formik'
import { AuthNavigate } from '../AuthNavigate/AuthNavigate'
import { LoginAndRegisterButton } from '../LoginAndRegisterButton/LoginAndRegisterButton'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../../navigation/routes'
import { loginFormSchema } from '../../../../utils/schemas'
import { Input } from '../../../../components/fields/Input'
import {
  ErrorMessageStyled,
  FormStyled,
  InputField,
  NameOfFieldStyled,
  Title,
  LabelStyled,
} from '../../components/RegisterForm/RegisterForm.styled'

const initialValues = {
  email: '',
  password: '',
}

export const LogInForm = () => {
  const { t } = useTranslation()

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginFormSchema}
    >
      {({ errors, touched }) => (
        <FormStyled autoComplete='off'>
          <Title>{t('Log in')}</Title>
          <LabelStyled>
            <NameOfFieldStyled>{t('Email')}</NameOfFieldStyled>
            <Input
              type='email'
              name='email'
              title={t('Email')}
              placeholder={t('Enter your email')}
              errorMessage={errors.email}
              successMessage='That`s correct'
              isError={errors.email && touched.email}
            />
            {/* <InputField type='email' name='email' placeholder={t('Enter email')} /> */}
            {/* <ErrorMessage
              name='email'
              render={(msg) => <ErrorMessageStyled>{t(msg)}</ErrorMessageStyled>}
            /> */}
          </LabelStyled>
          <LabelStyled>
            <NameOfFieldStyled>{t('Password')}</NameOfFieldStyled>
            <InputField type='password' name='password' placeholder={t('Enter password')} />
            <ErrorMessage
              name='password'
              render={(msg) => <ErrorMessageStyled>{t(msg)}</ErrorMessageStyled>}
            />
          </LabelStyled>
          <LoginAndRegisterButton text={t('Log In')} />
          <AuthNavigate text={t('Sign Up')} route={ROUTES.REGISTER} />
        </FormStyled>
      )}
    </Formik>
  )
}
