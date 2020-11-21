import React, { useContext, useEffect } from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, Dimensions} from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import GlobalState from '../context/GlobalState'; 
import { useNavigation } from '@react-navigation/native';




function Profile() {
  const [state, setState] = useContext(GlobalState);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style = {{
        "alignItems": "flex-start",
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(255, 255, 255, 255)"
    }}>
    <View style = {
      {
        alignItems: "flex-start",
        width: "100%",
        flexDirection:"row",
        marginTop:0,
        height: "33%",
        backgroundColor: "rgba(255, 255, 255, 255)",
        justifyContent: "space-around",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 4,
      }
    }
    >
    <TouchableOpacity onPress = {() => navigation.goBack()}  style={{marginTop:"10%",width: 10, height: 18}}><ImageBackground style={{marginTop:"10%",width: 10, height: 18}} source={require('../assets/arrow_back.png')}></ImageBackground></TouchableOpacity>
    <View style={{marginTop:"5%", flexDirection:"column", justifyContent:"space-around"}}>
      <ImageBackground source={require('../assets/avatar.jpg')} imageStyle={{ borderRadius: 50, borderWidth:3, borderColor: "rgba(108, 92, 189, 255)" }} style={{width: 90, height: 90}}></ImageBackground>
      <Text style={{marginTop:"10%",textAlign:"center", color:"rgba(108, 92, 189, 255)",fontSize:20}}>{state.user.name}</Text>
      <Text style={{marginTop:"5%",textAlign:"center", color:"rgba(18, 18, 18, 255)",fontSize:14}}>Class: {state.user.className}</Text>
      <Text style={{marginTop:"5%",textAlign:"center", color:"rgba(18, 18, 18, 255)",fontSize:14}}>RollNo.: {state.user.rollnum}</Text>
    </View>
    <TouchableOpacity /*onPress = {() => navigation.navigate('UserSettings')} */style={{marginTop:"10%",width: 25, height: 25}}><ImageBackground source={require('../assets/settings.png')} style={{marginTop:"10%",width: 25, height: 25}}></ImageBackground></TouchableOpacity>
    </View>
    <View style={{justifyContent:"center", alignContent:"center", marginLeft:"auto",marginRight:"auto"}}>
      <View style={{justifyContent:"center", alignContent:"center", marginLeft:"auto",marginRight:"auto"}}><Text style={{marginTop:"8%",textAlign:"center", color:"rgba(108, 92, 189, 255)",fontSize:24}}>Courses</Text></View>
      {
        state.user.regSubjects != undefined && 
        state.user.regSubjects.map((regSubjects,index) => (
          <ClassesCardComponent key={index} width = {screenWidth} subID = {regSubjects.subjectID} subName = {regSubjects.name} status = "normalCard"/>
          ))
      }
    </View>
    </View>
  );
  }

  export default Profile;