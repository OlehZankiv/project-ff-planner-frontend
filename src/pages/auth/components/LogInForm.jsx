import { Formik } from 'formik'
import { AuthNavigate } from './AuthNavigate'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../navigation/routes'
import { loginFormSchema } from '../../../utils/schemas'
import { Button, Input, Text } from '../../../components'
import { css } from 'styled-components'
import { LoginIcon } from '../../../assets/icons'
import { AuthFormStyled } from '../shared.styled'

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
        <AuthFormStyled autoComplete='off'>
          <Text
            style={{ marginBottom: '32px' }}
            type={'h5'}
            color={'primary'}
            fontWeight={'600'}
            lineHeight={'24'}
            tabletStyles={css`
              margin-bottom: 40px;
              font-size: 24px;
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
            style={{ marginTop: '8px' }}
            type='submit'
            fullWidth
            rightIcon={<LoginIcon />}
            title={t('Log In')}
            variant='primary'
          />
          <AuthNavigate text={t('Sign Up')} route={ROUTES.REGISTER} />
        </AuthFormStyled>
      )}
    </Formik>
  )
}
