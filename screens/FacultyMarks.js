import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Picker } from 'react-native';

const FacultyMarks = ({ navigation }) => {
  const [selectedStudent, setSelectedStudent] = useState("18BBA7021");
  const [selectedSubject, setSelectedSubject] = useState("MAT1001");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection:"column", backgroundColor:"#FFF", alignItems:"center", justifyContent:"center"}}>
      <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center'
      }
      } >
        <Text style = {
        {
          "fontFamily": "SF UI Text",
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
        "width": "45%",
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
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center",
        "height": 40,
        "width" :150
      }
    } >
      <Picker.Item label = "MAT1001" value = "MAT1001"/>
      <Picker.Item label = "ENG1001" value = "ENG1001"/>
      <Picker.Item label = "PHY1001" value = "PHY1001"/>
      <Picker.Item label = "CHY1001" value = "CHY1001"/>
    </Picker>
    </View>
    </View>
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'center'
      }
      } >
        <Text style = {
        {
          "fontFamily": "SF UI Text",
          "fontSize": 24,
          "color": "rgba(18, 18, 18, 255)",
          "marginTop": "10%"
        }
        } > Student: </Text>
        <View style = {
      {
        flexDirection: 'row',
        "alignItems": "flex-start",
        "paddingStart": "8%",
        "marginStart": "8%",
        "marginTop": "10%",
        "width": "45%",
        "height": "50%",
        "borderRadius": 50,
        "borderWidth": 1,
        "borderColor": "rgba(18, 18, 18, 255)"
      }
    } >
      <Picker
      selectedValue ={selectedSubject}
      onValueChange = {(ItemValue,ItemIndex) => setSelectedStudent(ItemValue)}
      style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        "color": "rgba(18, 18, 18, 255)",
        "textAlign":"center",
        "height": 40,
        "width" :150
      }
    } >
      <Picker.Item label = "18BBA7021" value = "18BBA7021"/>
      <Picker.Item label = "17BCE7033" value = "17BCE7033"/>
      <Picker.Item label = "17BCE7051" value = "17BCE7051"/>
    </Picker>
    </View>
    </View>
    <View style={{flex: 1, flexDirection:"row", backgroundColor:"#FFF", alignItems:"center", justifyContent:"space-around"}}>
      <Text style={{
          "fontFamily": "SF UI Text",
          "fontSize": 18,
          "color": "rgba(21, 21, 21, 255)",
          "marginRight":"5%"
          
        }}>Assignment 1</Text>
      <Progress.Bar title={"80"} progress={0.8} width={180} height={20} borderRadius={30} color={'rgb(108, 92, 189)'} borderColor={'rgba(108, 92, 189,0)'} unfilledColor={'rgb(180, 175, 175)'}>
      <Text style={{alignSelf:"center",color:"#FFF",position:"absolute"}}>80%</Text>
      </Progress.Bar>
    </View>
    </View>
    </SafeAreaView>
  );
}


export default FacultyMarks;