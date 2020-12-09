import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, Button, Platform, View, Text, SafeAreaView, ScrollView, ImageBackground, Linking } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import * as DocumentPicker from 'expo-document-picker';
import firebaseApp from '../firebaseApp';
import {useNavigation} from '@react-navigation/native'
import GlobalState from '../context/GlobalState';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Assignment({route}){
  const [document,setDocument] = useState({localUri: ""});
  const {index} = route.params;
  const st = parseInt(index);
  const navigation = useNavigation();
  const [state,setState] = useContext(GlobalState);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [fileReceived,setFileReceived] = useState(false);
  const [deadlinePassed,setDeadlinePassed] = useState(false);
  const [progress,setProgress] = useState({downloadProgress: null});

  useEffect(() => {
    if(date >= state.user.regSubjects[st].assignmentDeadline.toDate()){
      setDeadlinePassed(true);
    }
  })


  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View>
      <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%",}}>{state.user.regSubjects[st].subjectID}</Text>
        <TouchableOpacity style={{marginRight:"10%",}} onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
      </View>
      {state.user.type == "student" && (
        <View>
          <View style={{marginLeft:"auto",marginRight:"auto",marginTop:"15%", width:"80%"}}>
        <ClassesCardComponent time ="Deadline" subID = {state.user.regSubjects[st].assignmentDeadline.toDate().toString()} status = "notice"/>
        <Button color = "rgba(108, 92, 189, 255)"
        title="Download Assignment" 
        onPress = {async () => {
          firebaseApp.storage().ref('Assignments/' + state.user.regSubjects[st].subjectID + '/Question.pdf').getDownloadURL().then(url => {
            Linking.openURL(url);
          });
          
        }}></Button>
      </View>
      {!deadlinePassed ?
        (<View style={{flexDirection:"row",justifyContent:"space-around", marginTop:"10%", width:"85%", alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
            <View style={{}}>
            <TouchableOpacity onPress = {async () => {
              let doc = await DocumentPicker.getDocumentAsync({type: "application/pdf"});
              if(doc.type == 'success'){
                console.log("File received");
                setFileReceived(true);
                setDocument({localUri: doc.uri});
              }
            }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Upload PDF</Text></TouchableOpacity>
            <Text style={{  fontSize: 12, color:"#121212",textAlignVertical:"center"}}>
                (Max. Limit 1MB)
            </Text>
            </View>
            { fileReceived && (<TouchableOpacity onPress = {async () => {
              let blob = await fetch(document.localUri).then(r => r.blob());
              firebaseApp.storage().ref().child('Assignments/' + state.user.regSubjects[st].subjectID + '/'+ state.user.className + "" + state.user.rollnum).put(blob).then(t =>{
                console.log("Uploaded");
              });
            }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Submit</Text></TouchableOpacity>)
          }
        </View>): <Text style={{  fontSize: 20, color:"#F00",textAlign:"center"}}>Deadline Passed</Text>}
        <ImageBackground source={require('../assets/Illustration.png')} style={{marginTop: "10%",marginLeft:"10%",marginRight:"10%",width: "90%", height: 250}}></ImageBackground>

    </View>
      )}

      {state.user.type == "faculty" && (
        <View>
          <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:"10%", width:"85%", alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
          <View>
      <View>
        <Button onPress={showDatepicker} title="Select Deadline Date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Select Deadline Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
            <View>
            <TouchableOpacity onPress = {async () => {
              let doc = await DocumentPicker.getDocumentAsync({type: "application/pdf"});
              if(doc.type == 'success'){
                console.log("File received");
                setFileReceived(true);
                setDocument({localUri: doc.uri});
              }
            }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Upload PDF</Text></TouchableOpacity>
            <Text style={{  fontSize: 12, color:"#121212",textAlignVertical:"center"}}>
                (Max. Limit 1MB)
            </Text>
            </View>
            { fileReceived && (
            <TouchableOpacity onPress = {async () => {
              let blob = await fetch(document.localUri).then(r => r.blob());
              firebaseApp.storage().ref().child('Assignments/' + state.user.regSubjects[st].subjectID + '/'+ "Question.pdf").put(blob).then(t =>{
                console.log("Uploaded");
              });
              firebaseApp.firestore().doc("Subjects/" + state.user.regSubjects[st].subjectID).update({
                assignmentDeadline: date
              });
            }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Submit</Text></TouchableOpacity>)
          }
      
        </View>
        <ImageBackground source={require('../assets/Illustration.png')} style={{marginLeft:"10%",marginRight:"10%",width: "90%", height: 250}}></ImageBackground>

        </View>
        
      )}
    </View> 
  );
}
