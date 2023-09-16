import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();
function AppNavigator() {
   
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator