export const toUser = ({
  id,
  phone,
  birthday,
  skype,
  name,
  avatarURL,
  email,
  theme,
  language,
}) => ({
  id: id ?? '',
  email: email ?? '',
  name: name ?? '',
  avatarURL: avatarURL ?? '',
  theme: theme ?? 'light',
  phone: phone ?? '',
  birthday: birthday ? new Date(birthday) : '',
  skype: skype ?? '',
  language: language ?? 'en',
})

export const toUserDTO = ({ birthday, ...instance }) => ({
  birthday: birthday ? new Date(birthday).getTime() : undefined,
  ...instance,
})
