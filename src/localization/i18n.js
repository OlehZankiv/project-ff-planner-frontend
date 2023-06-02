import { en } from './strings/en'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const DEFAULT_LANGUAGE = 'en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
    },
    lng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
