import { resources } from 'localization/i18n'
import '@rneui/themed'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['zh']
  }
}

declare module '@rneui/themed' {
  export interface Colors {
    tertiary: string
    accent: string
    surface: string
    gray50: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
  }
}
