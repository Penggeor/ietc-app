import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import BottomTabs from './BottomTabs'

export default function Navigator() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}
