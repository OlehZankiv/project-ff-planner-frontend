import { en } from '../localization/strings/en'
import * as yup from 'yup'

export const profileUpdateValidationFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(40, en['Name can have maximum 40 characters'])
    .required(en['Name is a required field']),
  email: yup
    .string()
    .email(en['Email must be a valid email'])
    .required(en['Email is a required field']),
  phone: yup.string().max(20, en['Phone can have maximum 20 characters']),
  skype: yup.string(),
  birthday: yup.date(),
})

export const productivityValidationFormSchema = yup.object().shape({
  startDate: yup.date().required(en['Start date is a required field']),
  endDate: yup
    .date()
    .required(en['End date is a required field'])
    .when(
      'startDate',
      (startDate, schema) => startDate && schema.min(startDate, "End date can't before start date"),
    ),
})

export const findNumberSchema = yup.object().shape({
  number: yup.number().required(en['Number is a required field']),
})

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(en['Email must be a valid email'])
    .required(en['Email is a required field']),
  password: yup
    .string()
    .min(6, en['Password must be at least 6 characters'])
    .required(en['Password is a required field']),
})

export const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(40, en['Name can have maximum 40 characters'])
    .required(en['Name is a required field']),
  email: yup
    .string()
    .email(en['Email must be a valid email'])
    .required(en['Email is a required field']),
  password: yup
    .string()
    .min(6, en['Password must be at least 6 characters'])
    .required(en['Password is a required field']),
})

export const createTaskFormSchema = yup.object().shape({
  title: yup.string().required(en['Title is a required field']),
  priority: yup.string().required(en['Priority is a required field']),
})

export const feedbackFormSchema = yup.object().shape({
  rating: yup
    .number()
    .min(1, en['Rating is a required field'])
    .required(en['Rating is a required field']),
  comment: yup
    .string()
    .min(3, en['Comment must be at least 6 characters'])
    .required(en['Comment is a required field']),
})
