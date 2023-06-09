import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { CalendarIcon } from '../../assets/icons/CalendarIcon'
import { useAuthContext } from '../../contexts/auth'
import { Text } from '../../components/Text'
import styled, { css } from 'styled-components'
import { Input } from '../../components/fields/Input'
import Avatar from '../../components/avatar/Avatar'
import InputStatus from '../../components/InputStatus'
import { getBreakpointsStyles, useBreakpointValue } from '../../styles/breakpoints'

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
  const { logger } = useAuthContext()
  const nameFontSize = useBreakpointValue({
    mobileValue: 14,
    tabletValue: 18,
    desktopValue: 18,
  })
  const onPlusHandler = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/png, image/gif, image/jpeg'
    input.onchange = (e) => {
      // Ready to upload file on server
      const file = e.target.files[0]
      console.log('selected file', file)
    }
    input.click()
  }
  // const { colors } = useTheme()

  if (!logger) return null

  const userName = logger.name
  return (
    <UserWrapper>
      <Avatar type='profile' plus={true} styles={styles} onPlusHandler={onPlusHandler}></Avatar>
      <Text
        type='p'
        color='userNameText'
        fontWeight={1000}
        fontSize={nameFontSize}
        style={{ textAlign: 'center' }}
      >
        {userName}
      </Text>
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
          const { touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, values } =
            props

          return (
            <UserForm onSubmit={handleSubmit}>
              <DivForm>
                <InputWrapper>
                  <Input
                    id='username'
                    name='username'
                    type='text'
                    title={'User name'}
                    rightIcon={null}
                    isError={errors.username && touched.username}
                    successMessage={'This is Correct name'}
                    placeholder='Enter your name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                  <InputStatus error={errors.username} touched={touched.username} />
                </InputWrapper>

                <InputWrapper>
                  <Input
                    type='date'
                    id='birthday'
                    name='birthday'
                    placeholder='Enter your birthday'
                    title={'Birthday'}
                    // rightIcon={<CalendarIcon></CalendarIcon>}
                    value={values.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <InputStatus error={errors.birthday} touched={touched.birthday} />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                    title={'Email'}
                    rightIcon={null}
                    isError={errors.email && touched.email}
                    successMessage={'This is Correct email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputStatus error={errors.email} touched={touched.email} />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='Enter your phone number'
                    title={'Phone'}
                    rightIcon={null}
                    isError={errors.phone && touched.phone}
                    successMessage={'This is Correct phone'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputStatus error={errors.phone} touched={touched.phone} />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    id='skype'
                    name='skype'
                    type='text'
                    placeholder='Enter your skype'
                    title={'Skype'}
                    rightIcon={null}
                    isError={errors.skype && touched.skype}
                    successMessage={'This is Correct phone'}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
    min-height: 474px;
    /* margin-top: 151px; */
    background-color: ${colors.content};
    color: white;
    justify-content: center;
    border-radius: 16px;
    ${getBreakpointsStyles({
      tablet: css``,
      desktop: css``,
    })}
  `}
`

export const UserText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: #343434;
  text-align: center;
  margin-bottom: 40px;
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 14px;
      line-height: 1.29;
    `,
    desktop: css``,
  })}
`

export const UserForm = styled.form`
  // width: calc(100% - 36px);
  padding: 20px;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  ${getBreakpointsStyles({
    tablet: css`
      background: red;

      // width: 374px;
      // padding: 20px 175px;
    `,
    desktop: css`
      background: blue;
      // padding: 20px 164px;
      // width: 768px;

      flex-wrap: wrap;
    `,
  })}
`
export const DivForm = styled.div`
  margin-bottom: 10px;
  width: 100%;
  ${getBreakpointsStyles({
    desktop: css`
      column-count: 2;
      column-gap: 50px;
      flex: 1;
      // margin-left: 10px;
      width: 768px;
    `,
    tablet: css`
      background: red;
      width: 374px;
      //padding: 20px 175px;
    `,
  })}
`
export const InputWrapper = styled.div`
  ${getBreakpointsStyles({
    desktop: css`
      overflow: hidden;
    `,
  })}
`

export const UserButton = styled.button`
  width: 195px;
  height: 46px;
  background: #3e85f3;
  border: #3e85f3;
  border-radius: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  display: block;
  margin: auto;
  margin-top: 40px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${getBreakpointsStyles({
    tablet: css`
      width: 262px;
    `,
    desktop: css`
      margin-bottom: 60px;
    `,
  })}
`
