import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useAuthContext } from '../contexts/auth'
import { useUpdateUser } from '../hooks/query'
import { OpacityButton } from './buttons/OpacityButton'
import { Text } from './Text'
import { setStorageItem, STORAGE_KEYS } from '../utils/storage'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/uk'

export const LanguagePicker = ({ style, color, fontSize, isUserLogged = false }) => {
  const { i18n } = useTranslation()
  const { updateLanguage } = useUpdateUser()
  const { logger } = useAuthContext()

  const currentLanguage = i18n.language
  dayjs.locale(currentLanguage)

  useEffect(() => {
    if (logger?.language) i18n.changeLanguage(logger.language)
  }, [logger?.language])

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en'

    i18n.changeLanguage(newLanguage)
    isUserLogged && updateLanguage(newLanguage)
    setStorageItem(STORAGE_KEYS.LANGUAGE, newLanguage)
  }

  return (
    <OpacityButton onClick={handleLanguageChange} style={style}>
      <Text type='p' color={color} fontWeight={700} fontSize={fontSize}>
        {currentLanguage === 'en' ? 'uk' : 'en'}
      </Text>
    </OpacityButton>
  )
}
