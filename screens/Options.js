import React, {useContext, useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView,TextInput, ScrollView, ImageBackground } from 'react-native';
import SettingsComponent from '../components/SettingsComponent';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import GlobalState from '../context/GlobalState';



export default function Options () {
  const [state,setState] = useContext(GlobalState);
  const navigation = useNavigation();
  return (
    <View style={{height:"100%"}}>

    <View style={{height:"10%",marginTop: "10%"}}>
    <TouchableOpacity onPress = {() => navigation.goBack()} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 15, height: 27,marginLeft:"10%"}}><ImageBackground source={require('../assets/arrow_back.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
    </View>
        <View style={{height: "60%" ,justifyContent: "center"}}>
          <View style={{height:"15%","marginLeft":"20%","marginRight":"20%"}}>
          <TouchableOpacity onPress = {() => navigation.navigate('CreateRoom')} style = {{"alignItems": "flex-start","paddingStart": 41,"marginTop": 33.5,"width": 128,"height": 42.5,"borderRadius": 21.25,"justifyContent":"center","marginLeft":"auto","marginRight":"auto","backgroundColor": "rgba(108, 92, 189, 255)"}} ><Text style = {{"fontSize": 14,textAlignVertical:"center","color": "rgba(255, 255, 255, 255)"}} > Chat </Text></TouchableOpacity>
          </View>

          <View style={{height:"15%","marginLeft":"20%","marginRight":"20%"}}>
          <TouchableOpacity onPress = {() => navigation.navigate('CreateRoom')} style = {{"alignItems": "flex-start","paddingStart": 22,"marginTop": 33.5,"width": 128,"height": 42.5,"borderRadius": 21.25,"justifyContent":"center","marginLeft":"auto","marginRight":"auto","backgroundColor": "rgba(108, 92, 189, 255)"}} ><Text style = {{"fontSize": 14,textAlign: "center","color": "rgba(255, 255, 255, 255)"}} > Subject Performance </Text></TouchableOpacity>
          </View>

          {state.user.type == "faculty" && 
          <View style={{height:"15%","marginLeft":"20%","marginRight":"20%"}}>
          <TouchableOpacity onPress = {() => navigation.navigate('CreateRoom')} style = {{"alignItems": "flex-start","paddingStart": 22,"marginTop": 33.5,"width": 128,"height": 42.5,"borderRadius": 21.25,"justifyContent":"center","marginLeft":"auto","marginRight":"auto","backgroundColor": "rgba(108, 92, 189, 255)"}} ><Text style = {{"fontSize": 14,textAlign:"center","color": "rgba(255, 255, 255, 255)"}} > Class Performance </Text></TouchableOpacity>
          </View>}

          <View style={{height:"15%","marginLeft":"20%","marginRight":"20%"}}>
          <TouchableOpacity onPress = {() => navigation.navigate('CreateRoom')} style = {{"alignItems": "flex-start","paddingStart": 41,"marginTop": 33.5,"width": 128,"height": 42.5,"borderRadius": 21.25,"justifyContent":"center","marginLeft":"auto","marginRight":"auto","backgroundColor": "rgba(108, 92, 189, 255)"}} ><Text style = {{"fontSize": 14,textAlignVertical:"center","color": "rgba(255, 255, 255, 255)"}} > Doubts </Text></TouchableOpacity>
          </View>
        </View>
    </View> 
  );
}
