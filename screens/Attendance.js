import React, {useState, useContext, useEffect} from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import GlobalState from '../context/GlobalState';
import {Picker} from '@react-native-community/picker';
import { PieChart } from 'react-native-chart-kit'

const Attendance = () => {
  const [state, setState] = useContext(GlobalState);
  const screenWidth = Dimensions.get('window').width;
  console.log(state.user.regSubjects)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor:"#FFF", alignItems:"center"}}>
      <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center'
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
      selectedValue = {state.currentSubject}
      onValueChange = {(ItemValue,ItemIndex) => console.log(ItemIndex)}
      style = {
      {
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center",
        "height":25,
        "width" :100
      }
    } >
      {/* {console.log(state.user.regSubjects)}
      {state.user.regSubjects != undefined && 
        state.user.regSubjects.map((regSubject,index) => (
          <Picker.Item key={index} label = {regSubject.subjectID} value = {regSubject.subjectID}/>
        ))} */}
      <Picker.Item label = "MAT401" value = "MAT401"/>
      <Picker.Item label = "ENG401" value = "ENG401"/>
      {console.log(state.currentSubject)}
    </Picker>
    </View>
      </View>
      <View style={{flexDirection:"row", justifyContent: "space-around", width:"100%"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between"}}>
        <Text style = {
        {
          "fontSize": 38,
          textAlign: "center",
          "color": "rgba(108, 92, 189, 255)",
          "marginTop": 50
        }
      } > 25 </Text>
      <Text style = {
        {
          "fontSize": 15,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": 10
        }
      } > Total Classes </Text>
      </View>
      <View style={{flexDirection: "column", justifyContent: "space-between"}}>
        <Text style = {
        {
          "fontSize": 38,
          "color": "rgba(95, 238, 180, 255)",
          "textAlign":"center",
          "marginTop": 50
        }
      } > 20 </Text>
        <Text style = {
        {
          "fontSize": 15,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": 10
        }
      } > Classes Attended </Text>
      </View>
      </View>
      <View>
      <PieChart
        data={
          [
            { name: 'Attended', attended: 20, color: '#6C5CBD'},
            { name: 'Absent', attended: 5, color: 'rgba(255, 255, 255, 1)'}
          ]
        }
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }}
        accessor="attended"
        backgroundColor="transparent"
      />
      </View>
      </View>
    </SafeAreaView>
  );
}

export default Attendance;