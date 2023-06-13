import { useTranslation } from 'react-i18next'
import { useUpdateUser } from '../hooks/query'
import { OpacityButton } from './buttons/OpacityButton'
import { Text } from './Text'

export const LanguagePicker = ({ style, color, fontSize, isUserLogged = false }) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const { updateLanguage } = useUpdateUser()

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en'
    i18n.changeLanguage(newLanguage)
    isUserLogged && updateLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }
  return (
    <OpacityButton onClick={handleLanguageChange} style={style}>
      <Text type='p' color={color} fontWeight={700} fontSize={fontSize}>
        {currentLanguage === 'en' ? 'uk' : 'en'}
      </Text>
    </OpacityButton>
  )
}
