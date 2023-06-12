import styled, { css } from 'styled-components'
import { profileUpdateValidationFormSchema } from '../../utils/schemas'
import { Avatar, Button, DatePicker, Input, Text } from '../../components'
import { Form, Formik } from 'formik'
import { useUpdateUser } from '../../hooks/query'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '../../contexts/auth'
import { getBreakpointsStyles, useBreakpointValue } from '../../styles/breakpoints'
import { handleRequestSuccess } from '../../utils/notifications'
import { useState } from 'react'
import { useUpdateUserAvatar } from '../../hooks/query/users/useUpdateUserAvatar'

const ProfilePage = () => {
  const { t } = useTranslation()
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateUser()

  const [selectedAvatar, setSelectedAvatar] = useState(null)

  const { updateUserAvatar, isLoading: isUpdateUserAvatarLoading } = useUpdateUserAvatar(() =>
    setTimeout(() => {
      handleRequestSuccess(t('User was updated successfully'))
      setSelectedAvatar(null)
    }, 100),
  )

  const isLoading = isUpdateUserLoading || isUpdateUserAvatarLoading

  const { logger } = useAuthContext()

  const avatarSize = useBreakpointValue({ desktopValue: 124, tabletValue: 124, mobileValue: 72 })

  const onUserUpdate = (values) => {
    if (selectedAvatar) updateUserAvatar(selectedAvatar)
    updateUser(values)
  }

  return (
    <Wrapper>
      <Avatar
        selectedAvatar={selectedAvatar}
        onAvatarPick={setSelectedAvatar}
        size={avatarSize}
        name={logger?.name}
        withUpload
        image={logger?.avatarURL}
      />
      <Text type='h5' style={{ textAlign: 'center', marginTop: 20 }}>
        {logger?.name}
      </Text>
      <Text type='p' style={{ marginTop: 8, textAlign: 'center' }} fontWeight={600}>
        {t('User')}
      </Text>
      <Formik
        initialValues={logger}
        onSubmit={onUserUpdate}
        validationSchema={profileUpdateValidationFormSchema}
      >
        {({ errors, touched }) => {
          return (
            <ProfileForm autoComplete='off'>
              <FormFields>
                <Input
                  type='name'
                  name='name'
                  title={t('User Name')}
                  placeholder={t('Enter your user name')}
                  errorMessage={t(errors.name)}
                  successMessage={t('This is a CORRECT name')}
                  isError={errors.name && touched.name}
                />
                <Input
                  type='phone'
                  name='phone'
                  title={t('Phone')}
                  placeholder={t('Enter your phone')}
                  errorMessage={t(errors.phone)}
                  successMessage={t('This is a CORRECT phone')}
                  isError={errors.phone && touched.phone}
                />
                <DatePicker
                  name='birthday'
                  title={t('Birthday')}
                  placeholder={t('Enter your birthday')}
                  errorMessage={t(errors.birthday)}
                  successMessage={t('This is a CORRECT birthday')}
                  isError={errors.birthday && touched.birthday}
                />
                <Input
                  name='skype'
                  title={t('Skype')}
                  placeholder={t('Enter your skype')}
                  errorMessage={t(errors.password)}
                  successMessage={t('This is a CORRECT skype')}
                  isError={errors.skype && touched.skype}
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
              </FormFields>

              <Button
                buttonTextProps={{ lineHeight: 18, fontSize: 14 }}
                type='submit'
                fullWidth
                title={t('Save changes')}
                variant='primary'
                isLoading={isLoading}
              />
            </ProfileForm>
          )
        }}
      </Formik>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${colors.content};
    border-radius: 16px;
    padding: 60px 11vw;
    ${getBreakpointsStyles({
      tablet: css`
        padding: 40px 23vw;
      `,
      mobile: css`
        padding: 40px 18px;
      `,
    })}
  `}
`

const ProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  column-gap: 32px;
  margin-top: 40px;
`

const FormFields = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 3.5vw;

  & > * {
    width: calc(50% - 3.5vw / 2);
    ${getBreakpointsStyles({
      tablet: css`
        width: 100%;
      `,
      mobile: css`
        width: 100%;
      `,
    })}
  }
`

export default ProfilePage
