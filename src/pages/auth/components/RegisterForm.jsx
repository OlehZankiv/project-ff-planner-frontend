import { Formik } from 'formik'
import { AuthNavigate } from './AuthNavigate'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../navigation/routes'
import { registerFormSchema } from '../../../utils/schemas'
import { Button } from '../../../components/buttons/Button'
import { LoginIcon } from '../../../assets/icons'
import { FormStyled } from './RegisterForm.styled'
import { Input } from '../../../components/fields/Input'
import { Text } from '../../../components'
import { css } from 'styled-components'

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerFormSchema}
    >
      {({ errors, touched }) => (
        <FormStyled autoComplete='off'>
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
            rightIcon={<LoginIcon />}
            title={t('Sign Up')}
            variant='primary'
          />
          <AuthNavigate text={t('Log In')} route={ROUTES.LOGIN} />
        </FormStyled>
      )}
    </Formik>
  )
}
