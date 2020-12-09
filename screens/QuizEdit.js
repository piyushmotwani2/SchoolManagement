import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, Linking , View, Text, SafeAreaView, ScrollView, ImageBackground, Button } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';
import GlobalState from '../context/GlobalState';
import { useNavigation } from '@react-navigation/native';
import firebaseApp from '../firebaseApp'
import * as DocumentPicker from 'expo-document-picker';



export default function QuizEdit({route}){
    const [state,setState] = useContext(GlobalState);
    const [quizState,setQuizState] = useState([]);
    const navigation = useNavigation();
    const [fileReceived,setFileReceived] = useState(false);
    const [document,setDocument] = useState({localUri: ""});
    const {index} = route.params;
    const st = parseInt(index);
    const [quizAvailable,setQuizAvailable] = useState(state.user.regSubjects[st].quizAvailable);


    return(
        <View style={{height: "100%"}}>
        <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
            <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",}}>Quiz Edit</Text>
            <TouchableOpacity onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
        </View>


        <View style={{marginLeft:"auto",marginRight:"auto", marginTop:"10%", width:"80%"}}>

            {quizAvailable ? 
            (<Button title= "Tap to disable quiz" onPress = {()=>{
                firebaseApp.firestore().doc('Subjects/' + state.user.regSubjects[st].subjectID).update({quizAvailable: false}).then(()=>{
                  console.log('quiz disabled');
                  setQuizAvailable(false);
                  })}}/>) : (
                    <Button title= "Tap to enable quiz" onPress = {()=>{
                      firebaseApp.firestore().doc('Subjects/' + state.user.regSubjects[st].subjectID).update({quizAvailable: true}).then(()=>{
                        console.log('quiz enabled');
                        setQuizAvailable(true);
                        })}}/> 
                  ) }
            <Button title= "Download question template" onPress = {()=>{
                firebaseApp.storage().ref('quizTemplate.json').getDownloadURL().then(url => {
                    Linking.openURL(url);
                });
            }}/>

        <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:"10%", width:"85%", alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
            <View style={{}}>
            <TouchableOpacity onPress = {async () => {
              let doc = await DocumentPicker.getDocumentAsync({type: "application/json"});
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
              firebaseApp.storage().ref().child('Quiz/' + state.user.regSubjects[st].subjectID + '/'+ 'Quiz.json').put(blob).then(t =>{
                console.log("Uploaded");
              });
            }}><Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>Submit</Text></TouchableOpacity>)
          }
        </View>
        </View>
        </View>
    )
}