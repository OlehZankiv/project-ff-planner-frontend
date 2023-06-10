import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useAuthContext } from '../../contexts/auth'
import { Text } from '../../components/Text'

import styled, { css } from 'styled-components'
import { Input } from '../../components/fields/Input'
import Avatar from '../../components/avatar/Avatar'
import {
  getBreakpointsStyles,
  getDesktopStyles,
  useBreakpointValue,
} from '../../styles/breakpoints'
import { Button, DatePicker } from '../../components'
import { t } from 'i18next'

const UserPage = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const phoneRegex = /^(\+?38)?(\s?(\()?\d{3}(\))?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/
  const skypeRegex = /^(?!$)[a-zA-Z][a-zA-Z0-9.,\-_]{5,31}$/

  const userProfileFormValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, 'Invalid email format. Example: test@test.com')
      .required('Required'),
    username: Yup.string().min(3).max(30).required('Required'),
    birthday: Yup.date().required('Invalid date format. Example: 01/01/2023 ').nullable(),
    phone: Yup.string()
      .matches(phoneRegex, 'Invalid phone format. Example: 38 (097) 256 34 77')
      .required('Required'),
    skype: Yup.string().matches(skypeRegex, 'Invalid skype format. Example: my_username123'),
  })
  const { logger } = useAuthContext()
  const nameFontSize = useBreakpointValue({
    mobileValue: 14,
    tabletValue: 18,
    desktopValue: 18,
  })
  const userFontSize = useBreakpointValue({
    mobileValue: 12,
    tabletValue: 14,
    desktopValue: 14,
  })

  const buttonSize = useBreakpointValue({
    mobileValue: 195,
    tabletValue: 262,
    desktopValue: 262,
  })

  const onPlusHandler = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/gif, image/jpeg'
    input.onchange = (e) => {
      const file = e.target.files[0]
      console.log('selected file', file)
    }
    input.click()
  }

  if (!logger) return null

  const userName = logger.name
  return (
    <UserWrapper>
      <Avatar type='profile' plus={true} styles={styles} onPlusHandler={onPlusHandler}></Avatar>
      <Text type='h2' color='userNameText' fontWeight={1000} fontSize={nameFontSize}>
        {userName}
      </Text>
      <Text type='p' color='userAvatar' fontWeight={600} fontSize={userFontSize}>
        User
      </Text>
      <Formik
        initialValues={{ email: '', birthday: new Date() }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={userProfileFormValidationSchema}
      >
        {(props) => {
          const { touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, values } =
            props

          console.log(isSubmitting)

          return (
            <UserForm onSubmit={handleSubmit}>
              <DivForm>
                <Input
                  id='username'
                  name='username'
                  type='text'
                  title={'User name'}
                  rightIcon={null}
                  isError={errors.username && touched.username}
                  successMessage={'This is Correct name'}
                  placeholder={t('Enter your name')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <DatePicker
                  id='birthday'
                  name='birthday'
                  placeholder={t('Enter your birthday')}
                  title={'Birthday'}
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  id='email'
                  name='email'
                  type='text'
                  placeholder={t('Enter your email')}
                  title={'Email'}
                  rightIcon={null}
                  isError={errors.email && touched.email}
                  successMessage={'This is Correct email'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder={t('Enter your phone number')}
                  title={'Phone'}
                  rightIcon={null}
                  isError={errors.phone && touched.phone}
                  successMessage={'This is Correct phone'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  id='skype'
                  name='skype'
                  type='text'
                  placeholder={t('Enter your skype')}
                  title={'Skype'}
                  rightIcon={null}
                  isError={errors.skype && touched.skype}
                  successMessage={'This is Correct Skype'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </DivForm>
              <Button
                type='submit'
                title={'Save Changes'}
                disabled={isSubmitting}
                style={{ width: buttonSize }}
              >
                Save Changes
              </Button>
            </UserForm>
          )
        }}
      </Formik>
    </UserWrapper>
  )
}

export default UserPage

const styles = {
  desktop: `
    margin-top: 40px;

  `,
  tablet: `          
    margin-top: -40px;
    margin-bottom: 14px;
  `,
  mobile: `
    margin-top: -40px;
    margin-bottom: 14px;
  `,
}

export const UserWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.content};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    ${getBreakpointsStyles({
      tablet: css``,
      desktop: css``,
    })}
  `}
`

export const UserForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
  ${getBreakpointsStyles({
    tablet: css`
      width: 70%;
    `,
    desktop: css`
      width: 70%;
    `,
  })}
`
export const DivForm = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 50px;
  ${getDesktopStyles(css`
    justify-content: start;
  `)}
`
