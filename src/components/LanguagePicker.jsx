import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useUpdateUser } from '../hooks/query'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/uk'
import { Select } from './fields/Select'
import { setStorageItem, STORAGE_KEYS } from '../utils/storage'
import { useAuthContext } from '../contexts/auth'

export const Languages = {
  FunnyUkraine: 'funUk',
  Ukraine: 'uk',
  English: 'en',
}

const languageOption = [
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Українська' },
  { value: 'funUk', label: 'Файна Українська' },
]

export const LanguagePicker = ({ style, color }) => {
  const { i18n } = useTranslation()
  const { updateLanguage } = useUpdateUser()
  const { logger } = useAuthContext()

  const currentLanguage = i18n.language
  dayjs.locale(currentLanguage)

  useEffect(() => {
    updateLanguage(currentLanguage)
  }, [])

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
    logger?.language && updateLanguage(newLanguage)
    setStorageItem(STORAGE_KEYS.LANGUAGE, newLanguage)
  }

  return (
    <Select
      value={currentLanguage}
      onChange={handleLanguageChange}
      color={color}
      style={{ ...style, width: 'auto' }}
      name='language'
      options={languageOption}
    />
  )
}
