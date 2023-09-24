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
  const initialStartDate = dayjs(new Date()).subtract(1, 'month').toDate()
  const initialEndDate = new Date()
  const initialProductivity = 0

  let json = { productivity: 0, startDate: initialStartDate, endDate: initialEndDate }

  try {
    if (rest) {
      const { startDate, endDate, productivity } = JSON.parse(rest)
      json = {
        startDate: startDate ? new Date(startDate) : initialStartDate,
        endDate: endDate ? new Date(endDate) : initialEndDate,
        productivity: productivity ?? initialProductivity,
      }
    }
  } catch (e) {
    console.error(e)
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

export const toUserDTO = ({ birthday, startDate, endDate, productivity, ...instance }) => {
  return {
    birthday: birthday ? new Date(birthday).getTime() : undefined,
    rest: JSON.stringify({
      startDate: new Date(startDate).getTime(),
      endDate: new Date(endDate).getTime(),
      productivity: productivity,
    }),
    ...instance,
  }
}
