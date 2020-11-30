import React from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import * as firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const widthDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};




export default class Login extends React.Component{

  state = {
    email: "",
    password: "",
    errorMessage: null
  }

  handleLogin = () => {
    const {email, password} = this.state

    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .catch(error => 
      this.setState({errorMessage: error.message})
    );
  }

  render(){
  return(
    <ImageBackground source={require('../assets/line.png')} style={{width: '100%', height: '100%'}}>
    <View style = {
      {
        "alignItems": "center",
        "flex": 1,
        "justifyContent":"center"
      }
    } >

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
    } > Hey, There! </Text>

    <Text style = {
      {
        "fontSize": 12,
        "color": "rgba(58, 57, 57, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "marginTop": 7.5
      }
    } > Enter your credentials to login </Text>
    <TextInput 
      autoCapitalize="none"
      placeholder="Email"
      onChangeText={email => this.setState({email})}
      value={this.state.email}
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
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TextInput 
      secureTextEntry
      autoCapitalize="none"
      placeholder="Password"
      onChangeText={password => this.setState( {password} )}
      value = {this.state.password}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33.5,
        "width": 242.5,
        "height": 48,
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "borderRadius": 24,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TouchableOpacity 
      onPress = {this.handleLogin}
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
    } > Login </Text>
    </TouchableOpacity>

    <View style = {
      {
      "alignItems": "center",
      "justifyContent": "center",
      "marginHorizontal": 30
      }
    }>
      {this.state.errorMessage && <Text style = {{
        "color": "E9446A",
        "fontSize": 13,
        "textAlign": "center"
      }}>{this.state.errorMessage}</Text>}
    </View>
    </View>
    </View>
    </ImageBackground>

  );
  }
}
