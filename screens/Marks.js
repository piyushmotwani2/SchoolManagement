import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Picker } from 'react-native';

const Marks = ({ navigation }) => {
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
    </View>
    </SafeAreaView>
  );
}


export default Marks;