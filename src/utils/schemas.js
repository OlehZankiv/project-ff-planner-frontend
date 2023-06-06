import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('email must be a valid email').required('email is a required field'),
  password: yup
    .string()
    .min(4, 'password must be at least 4 characters')
    .required('password is a required field'),
})

export const registerFormSchema = yup.object().shape({
  name: yup.string().required('name is a required field'),
  email: yup.string().email('email must be a valid email').required('email is a required field'),
  password: yup
    .string()
    .min(4, 'password must be at least 4 characters')
    .required('password is a required field'),
})
