export const toUser = ({ id, name, avatarURL, email, theme }) => ({
  id: id ?? '',
  email: email ?? '',
  name: name ?? '',
  avatarURL: avatarURL ?? '',
  theme: theme ?? 'light',
})

export const toUserDTO = (instance) => ({ ...instance })
