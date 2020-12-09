import React, {useContext, useState,useEffect} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { PieChart, BarChart } from 'react-native-chart-kit'
import GlobalState from '../context/GlobalState';

const Marks = () => {
  const [selectedSubject, setSelectedSubject] = useState("MAT401");
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const [state,setState] = useContext(GlobalState);
  const [regnum,setRegnum] = useState('stu4A01');


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor:"#FFF", alignItems:"center"}}>
      {state.user.type == "student" && (
      <View style={{ flex: 1, backgroundColor:"#FFF", alignItems:"center"}}>
      <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 100
      }
      } >
        <Text style = {
        {
          "fontSize": 24,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": "10%"
        }
        } > Subject: </Text>
        <View style = {
      {
        flexDirection: 'row',
        "alignItems": "flex-start",
        "paddingStart": "8%",
        "marginStart": "8%",
        "marginTop": "10%",
        "width": "90%",
        "height": "60%",
        "borderRadius": 50,
        "borderWidth": 1,
        "borderColor": "rgba(18, 18, 18, 255)"
      }
    } >
      <Picker
      selectedValue ={selectedSubject}
      onValueChange = {(ItemValue,ItemIndex) => {setSelectedSubject(ItemValue);setSelectedSubjectIndex(ItemIndex)}}
      style = {
      {
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center",
        "height":"100%",
        "width": "100%",
        
      }
    } >
      {
        state.user.regSubjects != undefined && 
        state.user.regSubjects.map((regSubject,index) => (
          <Picker.Item key={index} label = {regSubject.subjectID} value = {regSubject.subjectID}/>
          ))
      }
    </Picker>
    </View>
      </View>
      <BarChart
        data={{
            labels: ['assign1', 'assign2', 'assign3', 'Exam1', 'Exam2', 'Exam3'],
            datasets: [{
              data: state.user.regSubjects[selectedSubjectIndex] == undefined || state.user.regSubjects[selectedSubjectIndex].Marks == undefined ? [0,0,0,0,0,0] : state.user.regSubjects[selectedSubjectIndex].Marks.stu4A01
            }]
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#000",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#000",
          backgroundGradientToOpacity: 0.8,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 2,
          useShadowColorFromDataset: false
        }}
      />
      </View>
      )}

        {/* FACULTY */}

      {state.user.type == "faculty" && (
      <View style={{ flex: 1, backgroundColor:"#FFF", alignItems:"center"}}>
      <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 100
      }
      } >
        <Text style = {
        {
          "fontSize": 24,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": "10%"
        }
        } > Subject: </Text>
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
      selectedValue ={selectedSubject}
      onValueChange = {(ItemValue,ItemIndex) => setSelectedSubject(ItemValue)}
      style = {
      {
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center",
        "height":"100%",
        "width": "100%",
        
      }
    } >
      {
        state.user.regSubjects != undefined && 
        state.user.regSubjects.map((regSubject,index) => (
          <Picker.Item key={index} label = {regSubject.subjectID} value = {regSubject.subjectID}/>
          ))
      }
    </Picker>
    </View>
      </View>
      <View>
      <BarChart
        data={{
            labels: ['assign1', 'assign2', 'assign3', 'Exam1', 'Exam-2', 'Exam-3'],
            datasets: [{
              data: [ 20,20,30,20,20,0 ]
            }]
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#fff",
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          useShadowColorFromDataset: false
        }}
      />
      </View>
      </View>
      )}
      </View>
    </SafeAreaView>
  );
}


export default Marks;