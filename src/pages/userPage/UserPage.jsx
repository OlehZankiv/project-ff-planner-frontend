import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { DisplayFormikState } from '../../components/DisplayFormikState'
import {
  //   UserWrapper,
  //   ImageAvatar,
  //   ImageWrapper,
  //   NameText,
  //   UserText,
  InputLabel,
  UserForm,
  DivForm,
  InputWrapper,
  Input,
  //   UserButton,
} from './UserPage.styled'
// import { useBreakpointValue } from '../../styles/breakpoints'
import styled from 'styled-components'
// import { AddIcon } from '../../assets/icons/AddIcon'
import InputStatus from '../../components/InputStatus'
import { getInputClassName } from './helpers'
const UserPage = () => {
  // const UserName = useBreakpointValue(userNameStyles)
  // const currentDate = new Date().toISOString().slice(0, 10)

  {
    /* return (
    <Wrapper>
      <UserWrapper>
        <ImageWrapper>
          <ImageAvatar src='https://img.spacergif.org/v1/spacer.gif'></ImageAvatar>
          <AddIcon></AddIcon>
        </ImageWrapper>
        <NameText>Fine Goose</NameText>
        <UserText>User</UserText>

        <UserForm>
          <DivForm>
            <InputWrapper>
              <InputLabel>User Name</InputLabel>
              <Input type='text' name='username' required id='username'></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Birthday</InputLabel>
              <Input
                type='date'
                id='start'
                name='userbirthday'
                value={currentDate}
                pattern='\d{4}-\d{2}-\d{2}'
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Email</InputLabel>
              <Input type='email' name='usermail' required></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Phone</InputLabel>
              <Input
                type='tel'
                name='usertel'
                title='+380 (96) 111-11-11'
                required
                minlength='3'
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Skype</InputLabel>
              <Input type='text' name='userskype'></Input>
            </InputWrapper>
          </DivForm>
          <UserButton type='submit'>Save Changes</UserButton>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  )
  </Formik> */
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const userProfileFormValidationSchema = Yup.object().shape({
    email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
    username: Yup.string().min(3).max(30).required('Required'),
  })

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={userProfileFormValidationSchema}
      >
        {(props) => {
          const {
            // values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props

          // const getInputClassName = (error, touched) => {
          //   if (!error && !touched) {
          //     return ''
          //   }

          //   if (!error && touched) {
          //     return 'success'
          //   }

          //   if (error && touched) {
          //     return 'error'
          //   }
          // }

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
              </DivForm>

              <button
                type='button'
                className='outline'
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>

              <DisplayFormikState {...props} />
            </UserForm>
          )
        }}
      </Formik>
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
