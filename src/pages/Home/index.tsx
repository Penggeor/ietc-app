import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#0050B3',
    height: '40%',
  },
})

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
    <View>
      <ScrollView style={styles.panel}>
        <View>
          <Text>I am HOME</Text>
        </View>
      </ScrollView>
    </View>
    // <Stack.Navigator initialRouteName={}>
    //   <Stack.Screen name={HomeRoute.HOME} component={HomeScreen} />
    // </Stack.Navigator>
  )
}
