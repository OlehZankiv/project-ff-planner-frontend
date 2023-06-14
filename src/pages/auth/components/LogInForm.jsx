import { Formik } from 'formik'
import { AuthNavigate } from './AuthNavigate'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../navigation/routes'
import { loginFormSchema } from '../../../utils/schemas'
import { Button, Input, Text } from '../../../components'
import { css, useTheme } from 'styled-components'
import { LoginIcon } from '../../../assets/icons'
import { AuthFormStyled } from '../shared.styled'
import { useLogin, useVerify } from '../../../hooks/query'
import { useEffect } from 'react'

const initialValues = {
  email: '',
  password: '',
}

export const LogInForm = () => {
  const { t } = useTranslation()
  const { login, isLoading: isLoginLoading } = useLogin()
  const { verify, isLoading: isVerifyLoading } = useVerify()
  const { colors } = useTheme()

  const isLoading = isLoginLoading || isVerifyLoading

  useEffect(() => {
    verify()
  }, [])

  return (
    <Formik initialValues={initialValues} onSubmit={login} validationSchema={loginFormSchema}>
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
            {t('Log In')}
          </Text>
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
            buttonTextProps={{ lineHeight: 24, fontSize: 18 }}
            style={{ marginTop: '15px' }}
            type='submit'
            fullWidth
            rightIcon={<LoginIcon color={colors.white} />}
            title={t('Log In')}
            variant='primary'
            isLoading={isLoading}
          />
          <AuthNavigate text={t('Sign Up')} route={ROUTES.REGISTER} />
        </AuthFormStyled>
      )}
    </Formik>
  )
}
