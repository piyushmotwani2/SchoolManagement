import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';
import Classroom from '../screens/Classroom';

const Stack = createStackNavigator();

function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Loading" headerMode = "none">

        <Stack.Screen
        name = "Loading"
        component = {Loading}/>

        <Stack.Screen
        name = "Classroom"
        component = {Classroom}/>

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

export default Routes;