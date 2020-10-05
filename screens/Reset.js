import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";


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







const Reset = () => {

const [oldPassword, setoldPassword] = useState('');
const [newPassword, setnewPassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');

async function changeCred() {
  if(newPassword===confirmPassword){
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    await Auth.changePassword(
      currentUser,
      oldPassword,
      newPassword
    );
  } catch (error) {
    console.log('error signing in', error);
  }
  }
}

  handleChange = () => {
      changeCred();
  }

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
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 24,
        "color": "rgba(108, 92, 189, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto"
      }
    } > Reset Password </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 11,
        "color": "rgba(58, 57, 57, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
      }
    } > Change your default credentials</Text>
    <TextInput 
      autoCapitalize="none"
      placeholder="Old Password"
      onChangeText={oldPassword => setoldPassword(oldPassword)}
      value={oldPassword}
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
      placeholder="New Password"
      onChangeText={newPassword => setnewPassword( newPassword )}
      value = {newPassword}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33.5,
        "width": 242.5,
        "height": 48,
        "padding": 15,
        "borderRadius": 24,
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
      placeholder="Confirm Password"
      onChangeText={confirmPassword => setconfirmPassword( confirmPassword )}
      value = {confirmPassword}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33.5,
        "width": 242.5,
        "height": 48,
        "padding": 15,
        "borderRadius": 24,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TouchableOpacity 
      onPress ={this.handleChange}
      style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 41,
        "marginStart": 59.5,
        "marginTop": 33.5,
        "width": 128,
        "height": 42.5,
        "borderRadius": 21.25,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        textAlignVertical:"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Reset </Text>
    </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>

  )
}

export default Reset