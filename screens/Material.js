
import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, Button, Platform, View, Text, SafeAreaView, ScrollView, ImageBackground, Linking } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import * as DocumentPicker from 'expo-document-picker';
import firebaseApp from '../firebaseApp';
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-community/picker';
import GlobalState from '../context/GlobalState';


export default function Material({route}){
  const [document,setDocument] = useState({localUri: ""});
  const {index} = route.params;
  const st = parseInt(index);
  const navigation = useNavigation();
  const [state,setState] = useContext(GlobalState);
  const [fileReceived,setFileReceived] = useState(false);
  const [deadlinePassed,setDeadlinePassed] = useState(false);
  const [progress,setProgress] = useState({downloadProgress: null});
  const [classIndex,setClassIndex] = useState("Session1");
  const [fileNotFound,setFileNotFound] = useState(false);



  return (
  <View>
      
      <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%",}}>{state.user.regSubjects[st].subjectID}</Text>
        <TouchableOpacity style={{marginRight:"10%",}} onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
      </View>
      {state.user.type == "student" && (
        <View>
                <Text style = {
                {
                  "fontSize": 24,
                  "color": "rgba(18, 18, 18, 255)",
                  "marginTop": "10%"
                }
                } > Class Num: </Text>
                <View style = {
                      {
                        flexDirection: 'row',
                        "alignItems": "flex-start",
                        "paddingStart": "8%",
                        "marginStart": "8%",
                        "marginTop": "10%",
                        "width": "80%",
                        "height": "10%",
                        "borderRadius": 50,
                        "borderWidth": 1,
                        "borderColor": "rgba(18, 18, 18, 255)"
                      }
                    } >
                        <Picker
                        selectedValue={classIndex}
                        style={{height: "100%", width: "80%"}}
                        onValueChange={(itemValue, itemIndex) =>
                          setClassIndex(itemValue)
                        }>
                        {
                        state.user.regSubjects[st].sessionTitles != undefined &&
                        state.user.regSubjects[st].sessionTitles.map((sessionTitle,index) => (
                          <Picker.Item key={index} label = {sessionTitle.name} value = {sessionTitle.name}/>
                          ))
                      }
                      </Picker>
      
                </View>
                <View style={{marginLeft:"auto",marginRight:"auto",marginTop:"15%", width:"80%"}}>
              <Button color = "rgba(108, 92, 189, 255)"
              title="Download Material"
              onPress = {async () => {
                firebaseApp.storage().ref('Material/' + state.user.regSubjects[st].subjectID + '/' + classIndex +'.pdf').getDownloadURL().then(url => {
                  Linking.openURL(url);
                }).catch(error =>{
                  if(error.code == 'storage/object-not-found'){
                    console.log("file not found");
                    setFileNotFound(true);
                  }
                });
      
              }}></Button>
            </View>
            {fileNotFound && 
            <View style={{marginLeft:"auto",marginRight:"auto",marginTop:"15%", width:"80%"}}>
              <Text>Material not uploaded yet</Text>
            </View>}
      
              <ImageBackground source={require('../assets/Illustration.png')} style={{marginTop: "10%",marginLeft:"10%",marginRight:"10%",width: "90%", height: 250}}></ImageBackground>
      
          </View>
          )}

          {state.user.type == "faculty" && (
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:"10%", width:"85%", alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
            <View>
            <Text style = {
                {
                  "fontSize": 24,
                  "color": "rgba(18, 18, 18, 255)",
                  "marginTop": "10%"
                }
                } > Class Num: </Text>
                <View style = {
                      {
                        flexDirection: 'row',
                        "alignItems": "flex-start",
                        "paddingStart": "8%",
                        "marginStart": "8%",
                        "marginTop": "10%",
                        "width": "60%",
                        "height": "50%",
                        "borderRadius": 50,
                        "borderWidth": 1,
                        "borderColor": "rgba(18, 18, 18, 255)"
                      }
                    } >
                        <Picker
                        selectedValue={classIndex}
                        style={{height: "100%", width: "100%"}}
                        onValueChange={(itemValue, itemIndex) =>
                          setClassIndex(itemValue)
                        }>
                        {
                        state.user.regSubjects[st].sessionTitles != undefined &&
                        state.user.regSubjects[st].sessionTitles.map((sessionTitle,index) => (
                          <Picker.Item key={index} label = {sessionTitle.name} value = {sessionTitle.name}/>
                          ))
                      }
                      </Picker>
      
                </View>
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
                firebaseApp.storage().ref().child('Material/' + state.user.regSubjects[st].subjectID + '/' + classIndex + '.pdf').put(blob).then(t =>{
                  console.log("Uploaded");
                  return <Text>File Succesfully Uploaded</Text>
                });
              }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Submit</Text></TouchableOpacity>)
            }
  
          </View>
          <ImageBackground source={require('../assets/Illustration.png')} style={{marginLeft:"10%",marginRight:"10%",width: "90%", height: 250}}></ImageBackground>
  
          </View>
  
        )}
  </View>
  )}
