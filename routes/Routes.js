import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';
import Classroom from '../screens/Classroom';
import CreateRoom from '../screens/CreateRoom';
import Notifications from '../screens/Notifications';
import Chat from '../screens/Chat';

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
        name = "CreateRoom"
        component = {CreateRoom}/>

        <Stack.Screen
        name = "Home"
        component = {Home}/>

        <Stack.Screen
        name = "Chat"
        component = {Chat}/>

        <Stack.Screen
        name = "Notifications"
        component = {Notifications}/>

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