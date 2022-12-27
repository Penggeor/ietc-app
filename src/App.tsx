import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'intl-pluralrules'

import theme, { ThemeProvider } from './style/theme'
import store from './utils/store'
import './utils/ignore'
import { imageAssets } from './theme/images'
import { fontAssets } from './theme/fonts'
import Navigator from './navigator/index'
import './localization/i18n'

const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  ) : (
    <View />
  )
}

export default App
