import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { DisplayFormikState } from '../../components/DisplayFormikState'
import {
  UserWrapper,
  ImageAvatar,
  ImageWrapper,
  NameText,
  UserText,
  InputLabel,
  UserForm,
  DivForm,
  InputWrapper,
  Input,
  UserButton,
} from './UserPage.styled'

import styled from 'styled-components'
import { AddIcon } from '../../assets/icons/AddIcon'
import InputStatus from '../../components/InputStatus'
import { getInputClassName } from './helpers'
const UserPage = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/
  const currentDate = new Date().toISOString().slice(0, 10)
  const phoneRegex = /^38 \(\d{3}\) \d{3} \d{2} \d{2}$/
  const skypeRegex = /^[a-zA-Z][a-zA-Z0-9.,\-_]{5,31}$/

  const userProfileFormValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, 'Invalid email format. Example: test@test.com')
      .required('Required'),
    username: Yup.string().min(3).max(30).required('Required'),
    birthday: Yup.string().matches(birthdayRegex, 'Invalid date format. Example: 01.01.2023 '),
    phone: Yup.string()
      .matches(phoneRegex, 'Invalid phone format. Example: 38 (097) 256 34 77')
      .required('Required'),
    skype: Yup.string().matches(skypeRegex, 'Invalid skype format. Example: my_username123'),
  })

  return (
    <Wrapper>
      <UserWrapper>
        <ImageWrapper>
          <ImageAvatar src='https://img.spacergif.org/v1/spacer.gif'></ImageAvatar>
          <AddIcon></AddIcon>
        </ImageWrapper>
        <NameText>Fine Goose</NameText>
        <UserText>User</UserText>
        <Formik
          initialValues={{ email: '', birthday: currentDate }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500))
            alert(JSON.stringify(values, null, 2))
          }}
          validationSchema={userProfileFormValidationSchema}
        >
          {(props) => {
            const {
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              values,
            } = props

            return (
              <UserForm onSubmit={handleSubmit}>
                <DivForm>
                  <InputWrapper>
                    <InputLabel htmlFor='username'>User Name</InputLabel>
                    <Input
                      id='username'
                      name='username'
                      type='text'
                      placeholder='Enter your name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName(errors.username, touched.username)}
                    ></Input>
                    <InputStatus error={errors.username} touched={touched.username} />
                  </InputWrapper>

                  <InputWrapper>
                    <InputLabel htmlFor='birthday'>Birthday</InputLabel>
                    <Input
                      type='date'
                      id='birthday'
                      name='birthday'
                      placeholder='Enter your birthday'
                      value={values.birthday}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName(errors.birthday, touched.birthday)}
                    />
                    <InputStatus error={errors.birthday} touched={touched.birthday} />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input
                      id='email'
                      name='email'
                      type='text'
                      placeholder='Enter your email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName(errors.email, touched.email)}
                    />
                    <InputStatus error={errors.email} touched={touched.email} />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor='phone'>Phone</InputLabel>
                    <Input
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='Enter your phone number'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName(errors.phone, touched.phone)}
                    />
                    <InputStatus error={errors.phone} touched={touched.phone} />
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel htmlFor='skype'>Skype</InputLabel>
                    <Input
                      id='skype'
                      name='skype'
                      type='text'
                      placeholder='Enter your skype'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName(errors.skype, touched.skype)}
                    />
                    <InputStatus error={errors.skype} touched={touched.skype} />
                  </InputWrapper>
                </DivForm>

                <UserButton type='submit' disabled={isSubmitting}>
                  Save Changes
                </UserButton>
                {/* <DisplayFormikState {...props} /> */}
              </UserForm>
            )
          }}
        </Formik>
      </UserWrapper>
    </Wrapper>
  )
}

export default UserPage

// const userNameStyles = {
//   desktopValue: styled.h1`
//     background-color: greenyellow;
//   `,
//   tabletValue: styled.p`
//     background-color: #7b3816;
//   `,
//   mobileValue: styled.div`
//     background-color: #1a2250;
//   `,
// }

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
`
