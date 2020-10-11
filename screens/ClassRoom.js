import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';



// gotoconference = () =>{
//   var joined = new Date();
//   var hours = joined.getHours();
//   var minutes = joined.getMinutes();
//   global.joinTime = hours+""+minutes;
  
//   console.log(joinTime);
//   Actions.conference();
// }




const Classroom = (props) => {


  const styles = StyleSheet.create({
    purpleBackground: {
        alignItems: "center",
        marginStart: 20,
        textAlign:"center",
        justifyContent: "center",
        textAlignVertical:"center",
        width: "30%",
        height: "45%",
        borderRadius: 30,
        backgroundColor: "rgba(108, 92, 189, 255)"
    },
    whiteText :{
       
      fontSize: 14,
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center",
      textAlignVertical:"center",
      color: "rgba(255, 255, 255, 255)"
      }
  });
  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{ fontSize:18, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",marginTop:"auto",marginBottom:"auto"}}>{props.subjectID}</Text>
        <TouchableOpacity onPress = {this.gotohome} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 25, height: 25,marginLeft:"45%",marginRight:"auto",}}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"100%", width:"100%"}}>
        <ImageBackground source={require('../assets/lines.png')} style={{alignContent:"center",width: "100%", height: "90%"}}>
          <View style={{flexDirection:"column",justifyContent:"space-around",marginTop:"20%",marginBottom:"auto"}}>
            <View style={{flexDirection:"row",width:"100%",justifyContent:"center", alignContent:"center", alignItems:"center" ,marginLeft:"auto",marginRight:"auto"}}>
            <TouchableOpacity onPress = {this.gotoconference} style = {styles.purpleBackground} >
              <Text style = {styles.whiteText} > Join Class </Text>
            </TouchableOpacity>
              
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"-10%"}}>
            <TouchableOpacity onPress = {this.gotoassignment}><ClassesCardComponent time ="Assignment" subID = "Due Today" status = "assignment"/></TouchableOpacity>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"-10%"}}>
            <ClassesCardComponent time ="Notice" subID = "Refer page 23 in the PDF mailed and complete the exercise" status = "notice"/>
            </View>
          </View>
        </ImageBackground>
        
      </View>
    </View> 
  );
}

export default Classroom;