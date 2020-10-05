import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Picker, ImageBackground } from 'react-native';
import NotificationComponent from '../components/NotificationComponent';
import { Actions } from 'react-native-router-flux';


gotohome = () =>{
  Actions.home();
}

const Notifications = ({ navigation }) => {

  
  return (
    <ScrollView style={{ flex: 1, backgroundColor:"#FFF"}} contentContainerStyle={{flex: 1,justifyContent:"flex-start" }}>
              <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
                <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",}}>Notifications</Text>
                <TouchableOpacity onPress = {this.gotohome}><ImageBackground source={require('../assets/arrow.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
              </View>
              <View style={{justifyContent:"space-evenly",marginTop:"10%"}}>
                <View style={{justifyContent:"center", backgroundColor:"#FFF",width:"100%",height:"40%"}}>
                  <Text style={{ fontSize:16, color:"#A19A9A", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",textAlign:"center", marginBottom:"5%"}}>Recent</Text>
                  <NotificationComponent focus ="yes" message = "CSE 1001 class is about to start" time="5m" btype = "primary" btext = "Join" bwidth = "30%" bheight = "50%" />
                  <NotificationComponent focus ="yes" message = "MAT 1001 assignment is due" time="5m" btype = "primary" btext = "Join" bwidth = "30%" bheight = "50%" /> 
                </View>
                <View style={{justifyContent:"center", backgroundColor:"#FFF",width:"100%",height:"40%",marginTop:"10%"}}>
                  <Text style={{ fontSize:16, color:"#A19A9A", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",textAlign:"center", marginBottom:"5%"}}>Previous</Text>
                  <NotificationComponent focus ="no" message = "CSE 1001 class is about to start" time="5m" btype = "disabled" btext = "Join" bwidth = "30%" bheight = "50%" />
                  <NotificationComponent focus ="no" message = "MAT 1001 assignment is due" time="5m" btype = "disabled" btext = "Join" bwidth = "30%" bheight = "50%" /> 
                </View>
              </View>
    </ScrollView>
  );
}


export default Notifications;