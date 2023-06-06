export const toUser = ({ id, name, avatarURL, email }) => ({
  id: id ?? '',
  email: email ?? '',
  name: name ?? '',
  avatarURL: avatarURL ?? '',
})

export const toUserDTO = ({ id, name, email, avatarURL }) => ({
  id,
  name,
  email,
  avatarURL,
})
