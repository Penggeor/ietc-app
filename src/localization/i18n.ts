import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './en/translation.json'
import ZH from './zh/translation.json'

export const SystemSupportLang = {
  EN: 'en',
  ZH: 'zh',
} as const

export const resources = {
  [SystemSupportLang.EN]: {
    translation: EN,
  },
  [SystemSupportLang.ZH]: {
    translation: ZH,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: SystemSupportLang.ZH,
  fallbackLng: SystemSupportLang.ZH,
  interpolation: {
    escapeValue: false,
  },
})
