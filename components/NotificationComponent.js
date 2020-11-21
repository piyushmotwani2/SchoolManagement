import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const NotificationComponent = (props) => {

    const styles = StyleSheet.create({  
      focused: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        marginLeft: "auto",
        marginRight:"auto",
        paddingStart: "5%",
        paddingEnd:"5%",
        width: "90%",
        height: "150%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(108,92,189,255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },
      unfocused :{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginLeft: "auto",
        marginRight:"auto",
        paddingStart: "5%",
        paddingEnd:"5%",
        width: "90%",
        height: "150%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(108, 92, 189, 255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },
      textStyle: {
         
        fontSize: 12,
        color:"rgba(18,18,18,255)",
        textAlign: "left",
        width: "40%"
      },
      texttimeStyle: {
         
        fontSize: 16,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
      },
    });
    if(props.focus=="yes"){
      return(
        <View style={{"marginTop":"3%","marginBottom":"3%"}}>
          <View style={{"flexDirection": "row", "alignItems":"center",}}>
          <View style={styles.focused}>
            <Text style={styles.textStyle}>{props.message}</Text>
            <Text style={styles.texttimeStyle}>{props.time}</Text>
            <ButtonComponent buttonWidth={props.bwidth} buttonHeight={props.bheight} type={props.btype} text={props.btext} size={16} style={{"marginTop":"auto","marginBottom":"auto"}}></ButtonComponent>
          </View>
        </View>
        </View>
      );
    }
    return(
      <View style={{"marginTop":"3%","marginBottom":"3%"}}>
        <View style={{"flexDirection": "row", "alignItems":"center",}}>
        <View style={styles.unfocused}>
          <Text style={styles.textStyle}>{props.message}</Text>
          <Text style={styles.texttimeStyle}>{props.time}</Text>
          <ButtonComponent buttonWidth={props.bwidth} buttonHeight={props.bheight} type={props.btype} text={props.btext} size={16} style={{"marginTop":"auto","marginBottom":"auto"}}></ButtonComponent>
        </View>
      </View>
      </View>
    );
};



export default NotificationComponent;