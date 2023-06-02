// TODO: Implement correct mapper in the future

export const toUser = ({ id, user_name, email }) => ({
  id,
  email,
  name: user_name,
})
