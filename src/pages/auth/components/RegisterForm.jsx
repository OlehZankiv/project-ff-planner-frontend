import { Formik } from 'formik'
import { AuthNavigate } from './AuthNavigate'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../navigation/routes'
import { registerFormSchema } from '../../../utils/schemas'
import { Button, Input, OpacityButton, Text } from '../../../components'
import { ArrowLeft, LoginIcon } from '../../../assets/icons'
import styled, { css, useTheme } from 'styled-components'
import { AuthFormStyled } from '../shared.styled'
import { useRegister } from '../../../hooks/query'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const RegisterForm = () => {
  const { t } = useTranslation()

  const formik = useRef(null)

  const { register, isLoading } = useRegister(() =>
    formik.current?.resetForm({ values: initialValues }),
  )
  const { colors } = useTheme()
  const navigate = useNavigate()

  return (
    <Formik
      innerRef={formik}
      initialValues={initialValues}
      onSubmit={register}
      validationSchema={registerFormSchema}
    >
      {({ errors, touched }) => (
        <AuthFormStyled autoComplete='off'>
          <CloseIconWrapper onClick={() => navigate(ROUTES.LANDING)}>
            <ArrowLeft color={colors.text} />
          </CloseIconWrapper>
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
            style={{ marginTop: '15px' }}
            buttonTextProps={{ lineHeight: 24, fontSize: 18 }}
            type='submit'
            fullWidth
            rightIcon={<LoginIcon color={colors.white} />}
            title={t('Sign up')}
            variant='primary'
            isLoading={isLoading}
          />
          <AuthNavigate text={t('Log In')} route={ROUTES.LOGIN} />
        </AuthFormStyled>
      )}
    </Formik>
  )
}

const CloseIconWrapper = styled(OpacityButton)`
  position: absolute;
  top: 24px;
  right: 36px;
`
