import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const SettingsComponent = (props) => {

    const styles = StyleSheet.create({  
      form: {
        "alignItems": "flex-start",
        "width": "80%",
        "height": "65%",
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "borderRadius": 50,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      },
      blackText: {
         
        fontWeight: "400",
        fontSize: 18,
        textAlign:"center",
        marginTop:"5%",
        marginBottom:"2%",
        marginLeft:"15%",
        color: "#121212",
        padding:"2%"
      },
    });

  return(
    <View>
        <View style={
            {
              alignItems: "flex-start"
            }
          }>
          <Text style = {styles.blackText}> {props.time} </Text>
          </View>
          <View style={{
            "alignItems": "center",
            "paddingTop": 10,
            "width":"90%",
            marginLeft:"auto",
            marginRight:"auto"
          }}>
            <TextInput style = {styles.form} />
      </View>
    </View>
  );


};



export default SettingsComponent;

