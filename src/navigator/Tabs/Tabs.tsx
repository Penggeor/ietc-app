import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'
import Home from '../../pages/Home'
// import My from '../My'
import { BottomTabRoute } from './utils'

const Tab = createBottomTabNavigator()
const BottomTab = createMaterialBottomTabNavigator()

const TabNavigator = () => (
  // <Tab.Navigator
  //   screenOptions={({ route }) => ({
  //     // eslint-disable-next-line react/prop-types
  //     tabBarIcon: ({ focused }) => {
  //       switch (route.name) {
  //         case 'Home':
  //           return (
  //             <FontIcon
  //               name="home"
  //               color={focused ? colors.lightPurple : colors.gray}
  //               size={20}
  //               solid
  //             />
  //           )
  //         case 'Profile':
  //           return (
  //             <FontIcon
  //               name="user"
  //               color={focused ? colors.lightPurple : colors.gray}
  //               size={20}
  //               solid
  //             />
  //           )
  //         default:
  //           return <View />
  //       }
  //     },
  //     tabBarActiveTintColor: colors.lightPurple,
  //     tabBarInactiveTintColor: colors.gray,
  //     tabBarStyle: {},
  //   })}
  //   // tabBarOptions={{
  //   //   activeTintColor: colors.lightPurple,
  //   //   inactiveTintColor: colors.gray,
  //   //   style: {
  //   //     // backgroundColor: 'white',
  //   //     // borderTopColor: 'gray',
  //   //     // borderTopWidth: 1,
  //   //     // paddingBottom: 5,
  //   //     // paddingTop: 5,
  //   //   },
  //   // }}
  //   initialRouteName="Home"
  //   swipeEnabled={false}
  // >
  //   <Tab.Screen name="Home" component={HomeNavigator} />
  //   <Tab.Screen name="Profile" component={ProfileNavigator} />
  // </Tab.Navigator>
  <BottomTab.Navigator
    initialRouteName="Home"
    // screenOptions={({ route }) => ({
    //   // eslint-disable-next-line react/prop-types
    //   tabBarIcon: ({ focused }) => {
    //     switch (route.name) {
    //       case 'Home':
    //         return (
    //           <FontIcon
    //             name="home"
    //             color={focused ? colors.lightPurple : colors.gray}
    //             size={20}
    //             solid
    //           />
    //         )
    //       case 'Profile':
    //         return (
    //           <FontIcon
    //             name="user"
    //             color={focused ? colors.lightPurple : colors.gray}
    //             size={20}
    //             solid
    //           />
    //         )
    //       default:
    //         return <View />
    //     }
    //   },
    // })}
  >
    <BottomTab.Screen name={BottomTabRoute.HOME} component={Home} />
    {/* <BottomTab.Screen name={BottomTabRoute.MY} component={My} /> */}
  </BottomTab.Navigator>
)

export default TabNavigator
