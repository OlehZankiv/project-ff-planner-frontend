export const toUser = ({ _id, name, avatarURL, email }) => ({
  id: _id ?? '',
  email: email ?? '',
  name: name ?? '',
  avatarURL: avatarURL ?? '',
})

export const toUserDTO = ({ id, name, email, avatarURL }) => ({
  _id: id,
  name,
  email,
  avatarURL,
})
