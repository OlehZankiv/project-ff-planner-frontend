import { en } from './strings/en'
import { uk } from './strings/uk'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const DEFAULT_LANGUAGE = 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
})

export default i18n
