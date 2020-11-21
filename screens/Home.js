import * as React from 'react';
import { Text, View, ImageBackground,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firebaseApp from '../firebaseApp'

import Schedule from '../screens/Schedule';
import Attendance from '../screens/Attendance';
import Marks from '../screens/Marks';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Schedule"
      tabBarOptions={{
        activeTintColor: '#6C5CBD',
        inactiveTintColor: '#A19A9A',
        style: {
          backgroundColor: '#fff'
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#6C5CBD',
          borderBottomWidth: 2,
          alignItems:'center',
          alignContent:'center',
          justifyContent: 'center'
        },
      }}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
        }}  />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: 'Attendance',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
        <Tab.Screen
        name="Marks"
        component={Marks}
        options={{
          tabBarLabel: 'Marks',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
    </Tab.Navigator>
  );
}


export default class Home extends React.Component {



  constructor(props){
    super(props);
    
  }

  render(){
    const { navigation } = this.props;
  return (
    <NavigationContainer independent={true}>
    <View style={{"alignItems": "flex-start"}}>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 21,
        "paddingTop": 18,
        "width": 75,
        "height": 120,
        "borderRadius": 37.5,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    </View>
    
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"-10%", marginBottom:"10%", marginRight:"10%",marginLeft:"10%"}}>
      <View style={{justifyContent:"center",width: 50,height: 50,backgroundColor: '#FFFFFF',borderRadius: 120,shadowColor: '#000000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.9,shadowRadius: 3,elevation: 4}}>
        <TouchableOpacity onPress = {() => navigation.navigate('CreateRoom')}><ImageBackground source={require('../assets/notification.png')} style={{padding:"5%",alignContent:"center",width: 25, height: 25,marginLeft:"auto",marginRight:"auto"}}></ImageBackground></TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress = {() => navigation.navigate('Profile')}><ImageBackground source={require('../assets/avatar.jpg')} imageStyle={{ borderRadius: 50, borderWidth:3, borderColor: "rgba(108, 92, 189, 255)" }} style={{width: 50, height: 50}}></ImageBackground></TouchableOpacity>
      </View>
    </View>
      <Stack.Navigator
        initialRouteName="Schedule"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={TabStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}


