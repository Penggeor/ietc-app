import { resources } from 'localization/i18n'
import '@rneui/themed'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['zh']
  }
}

declare module '@rneui/themed' {
  export interface Colors {
    gray: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
    }
    gray50: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
  }
}
