import { en } from '../localization/strings/en'
import * as yup from 'yup'

export const profileUpdateValidationFormSchema = yup.object().shape({
  name: yup.string().required(en['name is a required field']),
  email: yup
    .string()
    .email(en['email must be a valid email'])
    .required(en['email is a required field']),
  phone: yup.string(),
  skype: yup.string(),
  birthday: yup.date(),
})

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(en['email must be a valid email'])
    .required(en['email is a required field']),
  password: yup
    .string()
    .min(4, en['password must be at least 4 characters'])
    .required(en['password is a required field']),
})

export const registerFormSchema = yup.object().shape({
  name: yup.string().required(en['name is a required field']),
  email: yup
    .string()
    .email(en['email must be a valid email'])
    .required(en['email is a required field']),
  password: yup
    .string()
    .min(4, en['password must be at least 4 characters'])
    .required(en['password is a required field']),
})
