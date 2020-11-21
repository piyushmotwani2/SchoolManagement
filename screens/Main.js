import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const AddRoomScreen = ({navigation}) => {
    handleLogin = () => {
        
      }
    
    return(
        <ImageBackground source={require('../assets/line.png')} style={{width: '100%', height: '100%'}}>
        <View style = {
          {
            "alignItems": "center",
            "flex": 1,
            "justifyContent":"center"
          }
        } >
    
        <View style = {
          {
            "alignItems": "flex-start",
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "width": "80%",
            "height": "70%"
          }
        } >
        <Text style = {
          {
            "fontWeight": "400",
            "fontSize": 26,
            "color": "rgba(108, 92, 189, 255)",
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto"
          }
        } > Hey, There! </Text>
    
        <Text style = {
          {
            "fontSize": 12,
            "color": "rgba(58, 57, 57, 255)",
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "marginTop": 7.5
          }
        } > Enter your room name </Text>
        <TextInput 
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          style = {
          {
            "alignItems": "flex-start",
            "marginTop": 47.5,
            "width": 242.5,
            "height": 48,
            "borderRadius": 24,
            "padding": 15,
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "backgroundColor": "rgba(244, 244, 254, 255)"
          }
        }
        />
        <TextInput 
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState( {password} )}
          value = {this.state.password}
          style = {
          {
            "alignItems": "flex-start",
            "marginTop": 33.5,
            "width": 242.5,
            "height": 48,
            "padding": 15,
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "borderRadius": 24,
            "backgroundColor": "rgba(244, 244, 254, 255)"
          }
        }
        />
        <TouchableOpacity 
          onPress = {this.handleLogin}
          style = {
          {
            "alignItems": "center",
            "marginStart": 59.5,
            "marginTop": 40,
            "justifyContent":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "width": 120,
            "height": 45,
            "borderRadius": 25,
            "backgroundColor": "rgba(108, 92, 189, 255)"
          }
        } >
        <Text style = {
          {
            "fontSize": 14,
            "color": "rgba(255, 255, 255, 255)"
          }
        } > Login </Text>
        </TouchableOpacity>
    
        <View style = {
          {
          "alignItems": "center",
          "justifyContent": "center",
          "marginHorizontal": 30
          }
        }>
          {this.state.errorMessage && <Text style = {{
            "color": "E9446A",
            "fontSize": 13,
            "textAlign": "center"
          }}>{this.state.errorMessage}</Text>}
        </View>
        </View>
        </View>
        </ImageBackground>
    
      );
}

export default AddRoomScreen;