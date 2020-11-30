import React ,{useContext, useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import firebaseApp from '../firebaseApp'
import GlobalState from '../context/GlobalState';
import { useNavigation } from '@react-navigation/native';



export default function CreateRoom() {
  const [roomID, setRoomID] = useState("");
  const navigation = useNavigation();
return(
    <View style ={{
      height: "100%",
      marginTop: "10%"
    }}>
    <TouchableOpacity onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/arrow_back.png')} style={{alignContent:"flex-start",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>


    <View style = {
      {
        "alignItems": "flex-start",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "width": "80%",
        "height": "70%"
      }
    } >
    <Text style = {
      {
        "fontWeight": "400",
        "fontSize": 26,
        "color": "rgba(108, 92, 189, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto"
      }
    } > Welcome to Chat! </Text>

    <Text style = {
      {
        "fontSize": 12,
        "color": "rgba(58, 57, 57, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "marginTop": 7.5
      }
    } > Enter Room ID or create a new room </Text>
    <TextInput 
      autoCapitalize="none"
      placeholder="Room ID"
      onChangeText={roomID => setRoomID(roomID)}
      value={roomID}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 47.5,
        "width": 242.5,
        "height": 48,
        "borderRadius": 24,
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    
    <TouchableOpacity 
      onPress = {() => navigation.navigate('Chat',{roomID : roomID} )}
      style = {
      {
        "alignItems": "center",
        "marginStart": 59.5,
        "marginTop": 40,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "width": 120,
        "height": 45,
        "borderRadius": 25,
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontSize": 14,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Join Room </Text>
    </TouchableOpacity>

    {/* <View style = {
      {
      "alignItems": "center",
      "justifyContent": "center",
      "marginHorizontal": 30
      }
    }>
      {state.errorMessage && <Text style = {{
        "color": "E9446A",
        "fontSize": 13,
        "textAlign": "center"
      }}>{state.errorMessage}</Text>}
    </View> */}
    </View>
    </View>

  );
    }