import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList, SCREEN_NAMES } from './src/types/screens'
import HomeScreen from './src/screens/HomeScreen'
import VideoScreen from './src/screens/VideoScreen'

const RootStack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
        <RootStack.Screen name={SCREEN_NAMES.Video} component={VideoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
