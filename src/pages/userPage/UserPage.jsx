import React from 'react'
import { Formik } from 'formik'
import { useAuthContext } from '../../contexts/auth'
import { Text } from '../../components/Text'
import styled, { css } from 'styled-components'
import { Input } from '../../components/fields/Input'
import {
  getBreakpointsStyles,
  getDesktopStyles,
  useBreakpointValue,
} from '../../styles/breakpoints'
import { Button, DatePicker } from '../../components'
import { t } from 'i18next'
import { userFormSchema } from '../../utils/schemas'

import { PhoneInputField } from '../../components/fields/PhoneInputField'

const UserPage = () => {
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

  // const handleSubmit = (values, { resetForm }) => {
  //   login(values)
  //   resetForm()
  // }

  if (!logger) return null

  const userName = logger.name

  // const onPlusHandler = () => {
  //   const input = document.createElement('input')
  //   input.type = 'file'
  //   input.accept = 'image/png, image/gif, image/jpeg'
  //   input.onchange = (e) => {
  //     const file = e.target.files[0]
  //     console.log('selected file', file)
  //   }
  //   input.click()
  // }

  return (
    <UserWrapper>
      <div style={{ textAlign: 'center' }}>
        <Text type='h2' color='userNameText' fontWeight={1000} fontSize={nameFontSize}>
          {userName}
        </Text>
        <Text type='p' color='userAvatar' fontWeight={600} fontSize={userFontSize}>
          {t('User')}
        </Text>
      </div>
      <Formik
        initialValues={{ email: '', birthday: new Date() }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={userFormSchema}
      >
        {(props) => {
          const { touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, values } =
            props

          return (
            <UserForm onSubmit={handleSubmit}>
              <DivForm>
                <Column>
                  <Input
                    id='username'
                    name='username'
                    type='text'
                    title={t('User name')}
                    rightIcon={null}
                    isError={errors.username && touched.username}
                    successMessage={t('This is Correct name')}
                    placeholder={t('Enter your name')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                  <DatePicker
                    id='birthday'
                    name='birthday'
                    placeholder={t('Enter your birthday')}
                    title={t('Birthday')}
                    value={values.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    id='email'
                    name='email'
                    type='text'
                    placeholder={t('Enter your email')}
                    title={t('Email')}
                    rightIcon={null}
                    isError={errors.email && touched.email}
                    successMessage={t('This is Correct email')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Column>
                <Column>
                  <PhoneInputField
                    id='phone'
                    name='phone'
                    country={'th'}
                    placeholder={t('Enter your phone number')}
                    title={t('Phone')}
                    rightIcon={null}
                    isError={errors.phone && touched.phone}
                    successMessage={t('This is Correct phone')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    id='skype'
                    name='skype'
                    type='text'
                    placeholder={t('Enter your skype')}
                    title={t('Skype')}
                    rightIcon={null}
                    isError={errors.skype && touched.skype}
                    successMessage={t('This is Correct Skype')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Column>
              </DivForm>
              <Button
                type='submit'
                disabled={isSubmitting}
                style={{ width: buttonSize }}
                title={t('Save Changes')}
              />
            </UserForm>
          )
        }}
      </Formik>
    </UserWrapper>
  )
}

export default UserPage

export const UserWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.content};
    display: flex;
    padding: 40px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    height: 100%;
    /* max-height: 80%; */
  `}
`

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  ${getBreakpointsStyles({
    tablet: css`
      width: 70%;
    `,
    desktop: css`
      width: 80%;
      justify-content: space-between;
    `,
  })}
`

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${getDesktopStyles(css`
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 50px;
    justify-content: start;
    align-self: center;
  `)}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${getDesktopStyles(css`
    flex: 1;
    max-width: 50%;
  `)}
`
