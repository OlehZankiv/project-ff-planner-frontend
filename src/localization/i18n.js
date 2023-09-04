import { en } from './strings/en'
import { uk } from './strings/uk'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStorageItem, STORAGE_KEYS } from '../utils/storage'
import {funUk} from "./strings/funUk";
import {Languages} from "../components/LanguagePicker";

const savedLanguage = getStorageItem(STORAGE_KEYS.LANGUAGE, Languages.English)

const DEFAULT_LANGUAGE = savedLanguage ? savedLanguage : Languages.English

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
    funUk: { translation: funUk },
  },
  lng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
})

export default i18n
