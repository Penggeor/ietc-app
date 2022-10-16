import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default function Home() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
