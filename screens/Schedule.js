import { useNavigation, NavigationActions } from '@react-navigation/native';
import React, { useContext, useEffect,useState, useRef, } from 'react';
import { TouchableOpacity, View, Text, ScrollView, Linking, AppState, Platform, Button } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import GlobalState from '../context/GlobalState';
import firebaseApp from '../firebaseApp'
import firebase from 'firebase'
import update from 'react-addons-update';



function Schedule() {
  const [state, setState] = useContext(GlobalState);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [inClass,setInClass] = useState(false);
  const [subIndex,setSubIndex] = useState(0);
  const [newAttendance,setNewAttendance] = useState({attendance: state.user.attendance});
  const [subjectName,setSubjectName] = useState("ENG401");
  const [timeDiff,setTimeDiff] = useState(0);
  const [startTime,setStartTime] = useState(0);


  const handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      const currentTime = new Date().getTime();
      const diff = currentTime - startTime;
      setTimeDiff(diff);
      console.log('currentTime',currentTime);
      console.log('timeDiff',diff);
    }
    else if(
      appState.current.match(/active/) &&
      nextAppState === "background"
    ){
      const currentTime = new Date().getTime();
      setStartTime(currentTime);
      console.log("start time",currentTime);
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };
  
  return (
    <ScrollView style={{ flex: 1,
      backgroundColor:"#FFF"}}>
    {state.user.type == "student" && 
    <View  style={{"marginBottom":"10%"}}>

      {inClass && (<Button title="Leave Class" onPress = {() => {
        if(timeDiff >= 18000){
          setNewAttendance(update(newAttendance, {
            attendance:{
              [subIndex]: {
                $set: newAttendance.attendance[subIndex]+1
              }
            }
          }));
          firebaseApp.firestore().doc("Users/" + state.user.id).update({attendance: newAttendance.attendance}).then(()=>{
            console.log('attendance added');
          });
        }
        console.log(timeDiff);
        setInClass(false);
      }}/>)}

    {
        state.user.timetable.map((slots,index) => (
            <TouchableOpacity key={index} onPress = {() => {
              AppState.addEventListener("change", handleAppStateChange)
              if(Platform.OS == 'web'){
                window.open(slots.classlink, '_blank');
              } else {
                Linking.openURL(slots.classlink);
              }
              setSubjectName(slots.subjectID);
              setInClass(true);
            }}><ClassesCardComponent day = {slots.day} time = {slots.time} subID = {slots.subjectID} status = "active"/></TouchableOpacity>
            ))
        }
    
      </View>}
      {state.user.type == "faculty" && 
        <View  style={{"marginBottom":"10%"}}>

        {inClass && (<Button title="Leave Class" onPress = {() => {
          firebaseApp.firestore().doc("Subjects/" + subjectName).update({totalClasses: firebase.firestore.FieldValue.increment(1)}).then(()=>{
            console.log('total class increased');
          })
          setInClass(false);
        }}/>)}
  
      {
          state.user.timetable.map((slots,index) => (
              <TouchableOpacity key={index} onPress = {() => {
                if(Platform.OS == 'web'){
                  window.open(slots.classLink, '_blank');
                } else {
                  Linking.openURL(slots.classLink);
                }
                setSubjectName(slots.subjectID);
                setInClass(true);
              }}><ClassesCardComponent day = {slots.day} time = {slots.time} subID = {slots.subjectID} status = "active"/></TouchableOpacity>
              ))
          }
      
        </View>
      }
    </ScrollView>
  );
  }

export default Schedule;