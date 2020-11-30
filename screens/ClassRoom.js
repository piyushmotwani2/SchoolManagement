import React, {useContext, useEffect} from 'react';
import { TouchableOpacity, Linking , View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';
import GlobalState from '../context/GlobalState';
import { useNavigation } from '@react-navigation/native';



export default function ClassRoom ({route}) {
  const navigation = useNavigation();
  const [state, setState] = useContext(GlobalState);
  const {index} = route.params;
  const st = parseInt(index);

  useEffect(() =>{
    console.log(state.user.regSubjects[0].subjectID)
  })

  return (
    <View>
      {state.user.type == "student" && (
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",marginTop: "10%"}}>{state.user.regSubjects[st].subjectID}</Text>
        <TouchableOpacity onPress = {() => navigation.goBack()} style = {{marginLeft:"10%",marginRight:"5%",marginTop: "10%"}}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"100%", width:"100%"}}>
        <ImageBackground source={require('../assets/lines.png')} style={{alignContent:"center",width: "100%", height: "90%"}}>
          <View style={{flexDirection:"column",justifyContent:"space-around",marginTop:"20%",marginBottom:"auto"}}>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Assignment',{index: index})}><ClassesCardComponent time ="Assignment" subID = {state.user.regSubjects[st].assignmentText} status = "assignment"/></TouchableOpacity>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <ClassesCardComponent time ="Announcement" subID = {state.user.regSubjects[st].announcement} status = "notice"/>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Quiz',{index: index})}><ClassesCardComponent time ="Quiz" subID = {state.user.regSubjects[st].announcement} status = "notice"/></TouchableOpacity>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <TouchableOpacity onPress = {() => {console.log(index);navigation.navigate('Contact',{index: index})}}><ClassesCardComponent subID = "Tap to ask Doubt" status = "notice"/></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        
      </View>
      </View>
      )}
      {state.user.type == "faculty" && (
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",marginTop: "auto"}}>{state.user.regSubjects[st].subjectID}</Text>
        <TouchableOpacity onPress = {() => navigation.goBack()} style = {{marginLeft:"10%",marginRight:"10%",}}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"100%", width:"100%"}}>
        <ImageBackground source={require('../assets/lines.png')} style={{alignContent:"center",width: "100%", height: "90%"}}>
          <View style={{flexDirection:"column",justifyContent:"space-around",marginTop:"20%",marginBottom:"auto"}}>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Assignment',{index: index})}><ClassesCardComponent time ="Assignment" subID = "Tap to Edit" status = "assignment"/></TouchableOpacity>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <ClassesCardComponent time ="Announcement" subID = "Tap to Edit" status = "notice"/>
            </View>
            
          </View>
        </ImageBackground>
        
      </View>
      </View>
      )}
    </View> 
  );
}
