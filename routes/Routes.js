import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Login from '../screens/Login'

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
            {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
             
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;