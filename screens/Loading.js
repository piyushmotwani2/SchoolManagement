import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';



export default class Loading extends React.Component {
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            const { navigation } = this.props;
            if(user){
                user.updateProfile({
                    displayName: "stu4A01",
                });
                global.user = user;
                navigation.navigate('Home');
            }
            else{
                navigation.navigate('Login');
            }
        });
    }

        


    render(){
        return(
            <View style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size = "large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  