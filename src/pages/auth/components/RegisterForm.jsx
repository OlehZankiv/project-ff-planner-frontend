import { Formik } from 'formik'
import { AuthNavigate } from './AuthNavigate'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../navigation/routes'
import { registerFormSchema } from '../../../utils/schemas'
import { Button, Input } from '../../../components/'
import { LoginIcon } from '../../../assets/icons'
import { Text } from '../../../components'
import { css } from 'styled-components'
import { AuthFormStyled } from '../shared.styled'
import { useRegister } from '../../../hooks/query'
import { Spinner } from './Spinner'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const RegisterForm = () => {
  const { t } = useTranslation()
  const { register, isLoading } = useRegister()

  // console.log(isLoading)

  const handleSubmit = (values, { resetForm }) => {
    register(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerFormSchema}
    >
      {({ errors, touched }) => (
        <AuthFormStyled autoComplete='off'>
          <Text
            style={{ marginBottom: '40px' }}
            type='h5'
            color='primary'
            fontWeight='600'
            fontSize={24}
            lineHeight={24}
            mobileStyles={css`
              margin-bottom: 32px;
              font-size: 18px;
              line-height: 24px;
            `}
          >
            {t('Sign up')}
          </Text>
          <Input
            type='name'
            name='name'
            title={t('Name')}
            placeholder={t('Enter your name')}
            errorMessage={t(errors.name)}
            successMessage={t('Well done')}
            isError={errors.name && touched.name}
          />
          <Input
            type='email'
            name='email'
            title={t('Email')}
            placeholder={t('Enter your email')}
            errorMessage={t(errors.email)}
            successMessage={t('This is a CORRECT email')}
            isError={errors.email && touched.email}
          />
          <Input
            type='password'
            name='password'
            title={t('Password')}
            placeholder={t('Enter password')}
            errorMessage={t(errors.password)}
            successMessage={t('This is a CORRECT password')}
            isError={errors.password && touched.password}
          />
          <Button
            style={{ marginTop: '8px' }}
            type='submit'
            fullWidth
            rightIcon={isLoading ? <Spinner /> : <LoginIcon />}
            title={isLoading ? t('Loading') : t('Sign up')}
            variant='primary'
          />
          <AuthNavigate text={t('Log In')} route={ROUTES.LOGIN} />
        </AuthFormStyled>
      )}
    </Formik>
  )
}
