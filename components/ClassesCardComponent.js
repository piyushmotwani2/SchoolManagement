import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const ClassesCardComponent = (props) => {

    const styles = StyleSheet.create({  
      normalBackground: {
        flexDirection: "row",
        alignItems: "center",
        paddingStart: "2%",
        width: "100%",
        height: 70,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 255)",
        borderWidth: 1,
        borderColor: "rgba(108,92,189,255)"
      },
      activeBackground: {
        flexDirection: "row",
        alignItems: "center",
        paddingStart: "2%",
        width: "85%",
        height: 70,
        borderRadius: 10,
        backgroundColor: "rgba(108, 92, 189, 255)"
      },
      activeSubId: {
         
        fontWeight: "400",
        fontSize: 18,
        paddingLeft:0,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft:"auto",
        textAlign: "center",
        marginRight:"auto",
        color: "rgba(255, 255, 255, 255)"
      },
      activeSubName: {
         
        fontWeight: "400",
        fontSize: 18,
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign:"center",
        marginLeft:"auto",
        marginRight:"auto",
        color: "rgba(255, 255, 255, 255)",
        marginStart: 29
      },
      activeTime: {
         
        fontWeight: "400",
        fontSize: 18,
        paddingTop:"5%",
        marginBottom:"2%",
        paddingLeft:"7.5%",
        color: "rgba(108, 92, 189, 255)"
      },
      assignmentTime: {
         
        fontWeight: "400",
        fontSize: 20,
        marginBottom:"2%",
        color: "rgba(108, 92, 189, 255)"
      },
      inactiveBackground: {
        flexDirection: "row",
        alignItems: "center",
        paddingStart: "2%",
        width: "85%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "rgba(244, 244, 254, 255)"
      },
      leisureBackground: {
        flexDirection: "row",
        alignItems: "center",
        paddingStart: "2%",
        width: "85%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "rgba(95, 238, 180, 255)"
      },
      whiteBackground: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        width: "100%",
        minHeight: 80,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 255)",
        borderWidth:1,
        borderColor:"rgba(108, 92, 189, 255)"
      },
      inactiveSubId: {
         
        fontWeight: "400",
        fontSize: 18,
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign:"center",
        paddingLeft:15,
        marginLeft:"auto",
        marginRight: "auto",
        color: "rgba(161, 154, 154, 255)"
      },
      inactiveSubName: {
         
        fontWeight: "400",
        fontSize: 18,
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign:"center",
        marginLeft:"auto",
        marginRight:"auto",
        color: "rgba(161, 154, 154, 255)",
        marginStart: 29
      },
      inactiveTime: {
         
        fontWeight: "400",
        fontSize: 18,
        paddingTop:"5%",
        marginBottom:"2%",
        paddingLeft:"7.5%",
        color: "rgba(161, 154, 154, 255)"
      },
      blackText: {
         
        fontWeight: "400",
        fontSize: 18,
        textAlign:"center",
        marginTop:"auto",
        marginBottom:"auto",
        padding: "2%",
        color: "#121212"
      },
      textStyle: {
         
        fontSize: 16,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
        paddingLeft: "3%",
        paddingRight: "2%"
      },
      textStyleSub: {
         
        fontSize: 16,
        color:"rgba(18,18,18,255)",
        textAlign: "left",
        paddingLeft: "3%",
        paddingRight: "2%",
        width: "35%"
      },
    });

    if(props.status == "normalCard"){
      return(
        <View>
          <View style={{
            justifyContent:"space-around",
            "alignItems": "center",
            "paddingTop": 10
          }}>
            <View style = {styles.normalBackground} >
        <Text style = {styles.textStyle} > {props.subID} </Text>
        <Text numberOfLines={1} style = {styles.textStyleSub} > {props.subName} </Text>
        <ButtonComponent buttonWidth="20%" buttonHeight="35%" type="primary" text="View" size={14}></ButtonComponent>
        </View>
      </View>
    </View>

      );
    }

if(props.status == "active"){
  return(
    <View>
        <View style={
            {
              alignItems: "flex-start",
              display: props.cardshow
            }
          }>
          <Text style = {styles.activeTime}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10,
            display: props.cardshow
          }}>
            <View style = {styles.activeBackground} >
        <Text style = {styles.activeSubId} > {props.subID} </Text>
        <Text style = {styles.activeSubName} > {props.subName} </Text>
        </View>
      </View>
    </View>
  );
}
else if(props.status == "leisure"){
  return(
    <View>
        <View style={
            {
              alignItems: "flex-start",
              display: props.cardshow
            }
          }>
          <Text style = {styles.inactiveTime}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10,
            display: props.cardshow
          }}>
            <View style = {styles.leisureBackground} >
        <Text style = {styles.activeSubId} > {props.subID} </Text>
        <Text style = {styles.activeSubName} > {props.subName} </Text>
        </View>
      </View>
    </View>
  );
}
else if(props.status == "assignment"){
  return(
    <View>
        <View style={
            {
              alignItems: "flex-start"
            }
          }>
          <Text style = {styles.assignmentTime}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10
          }}>
            <View style = {styles.whiteBackground} >
        <Text style = {styles.blackText} > {props.subID} </Text>
        <ButtonComponent buttonWidth="45%" buttonHeight="60%" type="primary" text="View Assignment" size={14} ></ButtonComponent>
        </View>
      </View>
    </View>
  );
}
else if(props.status == "notice"){
  return(
    <View>
        <View style={
            {
              alignItems: "flex-start"
            }
          }>
          <Text style = {styles.assignmentTime}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10
          }}>
            <View style = {styles.whiteBackground} >
        <Text style = {styles.blackText} > {props.subID} </Text>
        </View>
      </View>
    </View>
  );
}
  return(
    <View>
        <View style={
            {
              alignItems: "flex-start",
              display: props.cardshow
            }
          }>
          <Text style = {styles.inactiveTime}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10,
            display: props.cardshow
          }}>
            <View style = {styles.inactiveBackground} >
        <Text style = {styles.inactiveSubId} > {props.subID} </Text>
        <Text style = {styles.inactiveSubName} > {props.subName} </Text>
        </View>
      </View>
    </View>
  );


};



export default ClassesCardComponent;
