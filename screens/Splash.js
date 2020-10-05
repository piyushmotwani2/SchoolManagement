import React, {useState, Component} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, Image} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
import { render } from 'react-dom';


class Splash extends Component {

    constructor(props){
        super(props);
      }
    
      state = {
        isLoggedIn: false
      }

      async componentDidMount(){
        const value = await AsyncStorage.getItem('@Mylogin:key');
        if (value !== null){
          this.setState({isLoggedIn: true})
          global.userName = await AsyncStorage.getItem('@MyUser:key');
          console.log(userName);
          Actions.home();
        } 
        else{
            Actions.login();
        }
      }

    
render(){
  return(
    <View style={{width:"100%",height:"100%",justifyContent:"center", alignContent:"center",alignItems:"center",marginLeft:"auto", marginRight:"auto"}}>
    <Image source={require('../assets/Splash.jpg')} style={{width: '50%', height: '50%',padding:"5%",display:"flex", justifyContent:"center"}}>
   </Image>
   </View>

  )
}

}

export default Splash