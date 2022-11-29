import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView style={styles.panel}>
      <View>
        <ScrollView style={styles.panel}>
          <View>
            <Text>I am HOME</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
