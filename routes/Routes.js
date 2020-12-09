import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';
import CreateRoom from '../screens/CreateRoom';
import Notifications from '../screens/Notifications';
import LearnLinear from '../util/LearnLinear';
import Classroom from '../screens/Classroom';
import Chat from '../screens/Chat';
import Options from '../screens/Options'
import Assignment from '../screens/Assignment'
import Quiz from '../screens/Quiz'
import Contact from '../screens/Contact'
import Material from '../screens/Material'
import QuizEdit from '../screens/QuizEdit'

const Stack = createStackNavigator();

function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Loading" headerMode = "none">

        <Stack.Screen
        name = "Loading"
        component = {Loading}/>

        <Stack.Screen
        name = "QuizEdit"
        component = {QuizEdit}/>

        <Stack.Screen
        name = "Material"
        component = {Material}/>

        <Stack.Screen
        name = "Quiz"
        component = {Quiz}/>

        <Stack.Screen
        name = "Options"
        component = {Options}/>

        <Stack.Screen
        name = "Assignment"
        component = {Assignment}/>

        <Stack.Screen
        name = "LearnLinear"
        component = {LearnLinear}/>

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
        name = "Contact"
        component = {Contact}/>

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