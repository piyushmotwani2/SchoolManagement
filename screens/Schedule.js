import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import GlobalState from '../context/GlobalState';


function Schedule() {
  const [state, setState] = useContext(GlobalState);
  const navigation = useNavigation();
  
  return (
    <ScrollView style={{ flex: 1,
      backgroundColor:"#FFF"}}>
    <View  style={{"marginBottom":"10%"}}>
      <TouchableOpacity onPress={() =>navigation.navigate('Classroom')}><ClassesCardComponent time ="8 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/></TouchableOpacity>
      <ClassesCardComponent time ="9 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="10 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "active"/>
      <ClassesCardComponent time ="11 AM" subID = "-" subName = "Leisure" status = "leisure"/>
      <ClassesCardComponent time ="12 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="1 PM" subID = "-" subName = "Lunch" status = "leisure"/>
      <ClassesCardComponent time ="2 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="3 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="4 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="5 PM" subID = "-" subName = "Leisure" status = "leisure"/>
      <ClassesCardComponent time ="6 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="7 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      </View>
     </ScrollView>
  );
  }

export default Schedule;