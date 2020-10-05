import React, {useState} from 'react';
import { View, Text, SafeAreaView, Picker } from 'react-native';

const Attendance = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState("MAT1001");
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
        "width": "45%",
        "height": "50%",
        "borderRadius": 50,
        "borderWidth": 1,
        "borderColor": "rgba(18, 18, 18, 255)"
      }
    } >
      {/* <Picker
      selectedValue ={selectedSubject}
      onValueChange = {(ItemValue,ItemIndex) => setSelectedSubject(ItemValue)}
      style = {
      {
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
    </Picker> */}
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
      </View>
    </SafeAreaView>
  );
}

export default Attendance;