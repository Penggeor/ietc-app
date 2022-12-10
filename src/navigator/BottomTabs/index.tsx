import * as React from 'react'
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Octicons from '@expo/vector-icons/Octicons'
import Home from 'pages/Home'
import Me from 'pages/Me'
import { useTheme } from '@rneui/themed'

const Tab = createMaterialBottomTabNavigator()

export default function BottomTabs() {
  const { theme } = useTheme()

  return (
    <Tab.Navigator barStyle={{ backgroundColor: theme.colors.primary }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Octicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Octicons name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
