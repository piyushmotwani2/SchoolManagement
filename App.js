import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "firebase/auth";
import 'firebase/firestore';
import Home from './screens/Home';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Loading" headerMode = "none">

        <Stack.Screen
        name = "Loading"
        component = {Loading}/>

        <Stack.Screen
        name = "Home"
        component = {Home}/>

        <Stack.Screen
        name = "Login"
        component = {Login}/>

        <Stack.Screen
        name = "Profile"
        component = {Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
