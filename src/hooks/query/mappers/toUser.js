// TODO: Implement correct mapper in the future

export const toUser = ({ id, user_name, email }) => ({
  id: id ?? '',
  email: email ?? '',
  name: user_name ?? '',
})

export const toUserDTO = ({ id, name, email }) => ({
  id,
  user_name: name,
  email,
})
