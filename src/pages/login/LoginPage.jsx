// TODO: Implement Login Page

import styled, { css } from 'styled-components'
import {
  getBreakpointsStyles,
  getDesktopStyles,
  getTabletStyles,
  useBreakpointValue,
} from '../../styles/breakpoints'
import { AppLogo, Button, Input, Modal, Text } from '../../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReviews } from '../../hooks/query/reviews/useReviews'
import { LoginIcon } from '../../assets/icons'
import { Formik } from 'formik'
import { useAppThemeContext } from '../../styles/theme/provider'
import { useLogin } from '../../hooks/query'

const LoginPage = ({}) => {
  // const { register } = useRegister()
  // useEffect(() => {
  //   register({ email: 'firegames5643@gmail.com', name: 'Oleh', password: 'zaets228$' })
  // }, [])
  const { login } = useLogin()
  useEffect(() => {
    login({ email: 'firegames5643@gmail.com', password: 'zaets228$' })
  }, [])

  const { isLoading, reviews } = useReviews()
  console.log(isLoading, reviews)

  const { setThemeType } = useAppThemeContext()
  setThemeType('dark')
  const { t } = useTranslation()

  const [visible, setVisible] = useState(true)

  const value = useBreakpointValue({
    desktopValue: 'Welcome to Desktop',
    tabletValue: 'Welcome to Tablet',
    mobileValue: 'Welcome to Mobile',
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }

  return (
    <Wrapper>
      {value}
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        onEnterPress={() => setVisible(false)}
      >
        <Formik initialValues={{ email: 'awdwdwd' }} onSubmit={handleSubmit}>
          <form>
            <Input
              type='email'
              title='EMAIL'
              errorMessage='Error'
              successMessage='Success'
              name='email'
              placeholder='nadiia@gmail.com'
            />
          </form>
        </Formik>
        <Button
          fullWidth
          type='primary'
          onClick={() => {}}
          rightIcon={<LoginIcon />}
          title={t('Sign Up')}
        />
        <AppLogo orientation='horizontal' />
        <Text type='p'>
          {t(
            "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
          )}
        </Text>
      </Modal>

      <button onClick={() => setVisible(true)}>Open</button>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;

  ${getBreakpointsStyles({
    desktop: css`
      background-color: blue;
    `,
    tablet: css`
      background-color: green;
    `,
  })}

  // The same as getBreakpointsStyles
  ${getDesktopStyles(css`
    background-color: blue;
  `)}
  ${getTabletStyles(css`
    background-color: green;
  `)}
`
