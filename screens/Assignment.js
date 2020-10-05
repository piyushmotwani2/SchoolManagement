import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';
import { ceil } from 'react-native-reanimated';

const Assignment = ({ navigation }) => {
  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",}}>CSE1001</Text>
        <ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground>
      </View>
      <View style={{marginLeft:"auto",marginRight:"auto",marginTop:"15%", width:"80%"}}>
        <ClassesCardComponent time ="Notice" subID = "Refer page 23 in the PDF mailed and complete the exercise" status = "notice"/>
      </View>
      <View>
          <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:"10%", width:"85%", alignItems:"center", marginLeft:"auto",marginRight:"auto"}}>
              <View style={{textAlign:"center"}}>
              <Text style={{  fontSize: 20, color:"#121212",textAlign:"center"}}>
                  Upload PDF
              </Text>
              <Text style={{  fontSize: 12, color:"#121212",textAlign:"center"}}>
                  (Max. Limit 1MB)
              </Text>
              </View>
              <ButtonComponent buttonWidth="35%" buttonHeight="60%" type="primary" text="Submit" size={18} ></ButtonComponent>
          </View>
      </View>
      <ImageBackground source={require('../assets/Illustration.png')} style={{marginLeft:"auto",marginRight:"-10%",flexDirection:"row",alignItems:"flex-end",width: "90%", height: 250, resizeMode:"cover"}}></ImageBackground>  
    </View> 
  );
}

export default Assignment;