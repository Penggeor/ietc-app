import { createTheme } from '@rneui/themed'

export { ThemeProvider } from '@rneui/themed'

const theme = createTheme({
  lightColors: {
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray300: '#e0e0e0',
    gray400: '#bdbdbd',
    gray500: '#9e9e9e',
  },
  darkColors: {
    gray50: '#212121',
    gray100: '#424242',
    gray200: '#616161',
    gray300: '#757575',
    gray400: '#9e9e9e',
    gray500: '#bdbdbd',
  },
  mode: 'light',
})

export default theme
