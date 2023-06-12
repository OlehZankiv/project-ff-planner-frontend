export const toUser = ({ id, phone, birthday, skype, name, avatarURL, email, theme }) => ({
  id: id ?? '',
  email: email ?? '',
  name: name ?? '',
  avatarURL: avatarURL ?? '',
  theme: theme ?? 'light',
  phone: phone ?? '',
  birthday: birthday ? new Date(birthday) : '',
  skype: skype ?? '',
})

export const toUserDTO = ({ birthday, ...instance }) => ({
  birthday: birthday ? new Date(birthday).getTime() : undefined,
  ...instance,
})
