import { useNavigation, NavigationActions  } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, View, Text, ScrollView, Linking } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import Classroom from '../screens/Classroom';
import GlobalState from '../context/GlobalState';
import firebaseApp from '../firebaseApp'



function Schedule() {
  const [state, setState] = useContext(GlobalState);
  
  return (
    <ScrollView style={{ flex: 1,
      backgroundColor:"#FFF"}}>
    <View  style={{"marginBottom":"10%"}}>

    {
        state.user.timetable.map((slots,index) => (
          <TouchableOpacity key={index} onPress = {() => Linking.openURL(slots.classlink)}><ClassesCardComponent day = {slots.day} time = {slots.time} subID = {slots.subjectID} subName = "Engineering Calculus" status = "active"/></TouchableOpacity>
          ))
      }
    
      </View>
     </ScrollView>
  );
  }

export default Schedule;