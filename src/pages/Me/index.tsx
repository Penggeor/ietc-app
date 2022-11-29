import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Screen</Text>
    </View>
  )
}

export default function Me() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="My" component={HomeScreen} />
    </Stack.Navigator>
  )
}
