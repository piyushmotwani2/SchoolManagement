import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { PieChart, BarChart } from 'react-native-chart-kit'

const Marks = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState("MAT1001");
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        "height":25,
        "width" :100,
        
      }
    } >
      <Picker.Item label = "MAT401" value = "MAT401"/>
      <Picker.Item label = "ENG401" value = "ENG401"/>
    </Picker>
    </View>
      </View>
      <View>
      <BarChart
        data={{
            labels: ['Project-1', 'project-2', 'project-3', 'Exam-1', 'Exam-2', 'Exam-3'],
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
    </SafeAreaView>
  );
}


export default Marks;