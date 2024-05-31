/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Notifications' component={Notifications}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Settings' component={Settings}/>
    </Stack.Navigator>
  )
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


export default App;
