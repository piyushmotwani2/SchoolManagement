import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const CardComponent = (props) => {

    const styles = StyleSheet.create({  
      focused: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginLeft: "auto",
        marginRight:"auto",
        paddingStart: "5%",
        paddingEnd:"5%",
        width: "90%",
        height: "120%",
        borderRadius: 15,
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
        height: "120%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "rgba(108, 92, 189, 255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },
      textStyle: {
         
        fontSize: 18,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
        paddingLeft: "3%",
        paddingRight: "2%"
      },
      textStyleSub: {
         
        fontSize: 18,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
        paddingLeft: "3%",
        paddingRight: "2%",
        width: "35%"
      },
    });
    if(props.focus=="yes"){
      return(
        <View style={{"marginTop":"5%"}}>
        <View style={{"flexDirection": "row", "alignItems":"center", "marginTop":"5%", "marginBottom":"10%"}}>
        <View style={styles.unfocused}> 
          <Text style={styles.textStyle}>{props.subid}</Text>
        <Text numberOfLines={1} style={styles.textStyleSub}>{props.subname}</Text>
          <ButtonComponent buttonWidth="15%" buttonHeight="65%" type="primary" text="View" size={12}></ButtonComponent>
        </View>
      </View>
        </View>
      );
    }
};

export default CardComponent;