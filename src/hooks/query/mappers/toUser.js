import { Languages } from '../../../components/LanguagePicker'
import dayjs from 'dayjs'

export const toUser = ({
  id,
  phone,
  birthday,
  skype,
  name,
  avatarURL,
  email,
  theme,
  language,
  rest,
}) => {
  let json

  try {
    json = JSON.parse(rest)
  } catch (_) {
    json = { startDate: dayjs(new Date()).subtract(1, 'month'), endDate: new Date() }
  }

  return {
    id: id ?? '',
    email: email ?? '',
    name: name ?? '',
    avatarURL: avatarURL ?? '',
    theme: theme ?? 'light',
    phone: phone ?? '',
    birthday: birthday ? new Date(birthday) : '',
    skype: skype ?? '',
    language: language ?? Languages.English,
    ...json,
  }
}

export const toUserDTO = ({ birthday, startDate, endDate, ...instance }) => ({
  birthday: birthday ? new Date(birthday).getTime() : undefined,
  rest: JSON.stringify({ startDate: startDate.toDateString(), endDate: endDate.toDateString() }),
  ...instance,
})
