import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView,TextInput, ScrollView, ImageBackground } from 'react-native';
import SettingsComponent from '../components/SettingsComponent';
import ButtonComponent from '../components/ButtonComponent';
import { showMessage, hideMessage } from "react-native-flash-message";

gotoprofile = () => {
  Actions.profile();
}


function UserSettings () {

  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  
  async function changeCred() {
    if(newPassword!=""&&confirmPassword!=""&&oldPassword!=""){
    if(newPassword===confirmPassword){
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        oldPassword,
        newPassword
      );
      showMessage({
        message: "Password changed successfully!",
        autoHide:true,
        duration:1800,
        type: "success",
      });
    } catch (error) {
      console.log('error signing in', error);
      showMessage({
        message: "Something went wrong!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
    }
    else{
      showMessage({
        message: "New and Confirm passwords must be same!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
  }
  else{
    showMessage({
      message: "Fields cannot be empty!",
      autoHide:true,
      duration:1800,
      type: "danger",
    });
  }


  }
  
    handleChange = () => {
        changeCred();
    }


  return (
    <View style={{height:"100%", alignContent:"center",justifyContent:"center", marginLeft:"auto", marginRight:"auto"}}>
      <View style={{flexDirection:"row",justifyContent:"space-around", backgroundColor:"#FFF",width:"100%",height:"20%"}}>
        <TouchableOpacity onPress = {this.gotoprofile} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 15, height: 27,marginLeft:"auto",marginRight:"auto",}}><ImageBackground source={require('../assets/arrow_back.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
        <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"}}>Settings</Text>
        <TouchableOpacity style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",opacity:0,width: 25, height: 25,marginLeft:"auto",marginRight:"auto",}}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",opacity:0,width: 18, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"80%"}}>
        <View style={{height:"15%",marginTop:"3%"}}>  
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
        </View>
        <View style={{height:"100%", marginTop:"60%"}}>
        <View style={{height:"20%",flexDirection:"row","justifyContent":"center","marginLeft":"auto","marginRight":"auto"}}>
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
      </View>
    </View> 
  );
}

export default UserSettings;