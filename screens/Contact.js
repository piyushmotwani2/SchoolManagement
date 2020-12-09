import { useNavigation } from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Button, Platform, View, Text, SafeAreaView, ScrollView, ImageBackground, Linking } from 'react-native';
import GlobalState from '../context/GlobalState';
import firebaseApp from '../firebaseApp';


export default function Contact({route}){
const {index} = route.params;
const st = parseInt(index);
const [state,setState] = useContext(GlobalState);
const [doubt,setDoubt] = useState("");
const navigation = useNavigation();
const [email,setEmail] = useState("");

useEffect(() =>{
    firebaseApp.firestore().doc(state.user.regSubjects[st].faculty).get().then(fac=>{
        setEmail(fac.data().email);
    })
})

return (
<View style ={{height: "100%"}}>
    <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
    <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%",}}>{state.user.regSubjects[st].subjectID}</Text>
        <TouchableOpacity style={{marginRight:"10%",}} onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
    </View>

    <TextInput 
      autoCapitalize="none"
      placeholder="Enter Doubt"
      onChangeText={doubt => setDoubt(doubt)}
      value={doubt}
      style = {
      {
        "alignItems": "center",
        "marginTop": 47.5,
        "width": 242.5,
        "height": "40%",
        "borderRadius": 24,
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <Button title= "Ask Doubt" onPress = {() => Linking.openURL('mailto:'+email+'?subject='+ state.user.regSubjects[st].subjectID + '%20Doubt' + '&body=' + doubt)}></Button>
</View>
);
}