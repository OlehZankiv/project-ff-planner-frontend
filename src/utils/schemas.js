import { en } from '../localization/strings/en'
import * as yup from 'yup'

export const profileUpdateValidationFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(40, en['name can have maximum 40 characters'])
    .required(en['name is a required field']),
  email: yup
    .string()
    .email(en['email must be a valid email'])
    .required(en['email is a required field']),
  phone: yup.string().max(20, en['phone can have maximum 20 characters']),
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
    .min(6, en['password must be at least 6 characters'])
    .required(en['password is a required field']),
})

export const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(40, en['name can have maximum 40 characters'])
    .required(en['name is a required field']),
  email: yup
    .string()
    .email(en['email must be a valid email'])
    .required(en['email is a required field']),
  password: yup
    .string()
    .min(6, en['password must be at least 6 characters'])
    .required(en['password is a required field']),
})
