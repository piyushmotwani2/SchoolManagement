import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import GlobalState from '../context/GlobalState';
import firebaseApp from '../firebaseApp'
import { useNavigation } from '@react-navigation/native';
import { useScreens } from 'react-native-screens';



function Loading() {
    const db = firebaseApp.firestore();
    const [state, setState] = useContext(GlobalState);
    const navigation = useNavigation();
    useEffect(() => {
        // firebaseApp.auth().signOut();
    
    firebaseApp.auth().onAuthStateChanged(user => {
        if(user){
            const subscriber = db.collection("Students").doc(user.displayName).onSnapshot(doc => {
                if(doc.data().type == "student"){
                    const name = doc.data().name;
                    const classPath = doc.data().classSection.path;
                    const rollnum= doc.data().rollnum;
                    getClass(name,classPath,rollnum);
                }
                else if(doc.data().type == "faculty"){
                    const name = doc.data().name;
                    const subjects = doc.data().subjects;
                    const slots = doc.data().Slots;
                    getSubjects(subjects,name,slots);
                }
            });

            const getSubjects = async(subjects,name,slots) => {
                let subjectArray = [];
                await subjects.forEach(subject => {
                    db.doc(subject).get().then(sub => {
                        subjectArray.push(sub.data());
                    })
                })
                setState({
                    user: {
                        ...user,
                        name: name,
                        regSubjects: subjectArray,
                        email: user.email,
                        type: "faculty",
                        timetable: slots
                    }
                })
                navigation.navigate('Home');
            }

            const getClass = async(name,regNum,rollnum) =>{
                await db.doc(regNum).get().then(classnm =>{
                    let subjectArray = [];
                    classnm.data().subjects.forEach(sub => {
                        db.doc(sub.path).get().then(subs => {
                            subjectArray.push(subs.data());
                        });
                    });
                    setState({
                        user: {
                            ...state.user,
                            name: name,
                            rollnum: rollnum,
                            className: classnm.data().name,
                            regSubjects: subjectArray,
                            email: user.email,
                            type: "student",
                            timetable: classnm.data().Slots
                        },
                    });
                    navigation.navigate('Home');
                });
            }
        }
        else{
            navigation.navigate('Login');
        }
    });
  }, []);
        return(
            <View style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size = "large"></ActivityIndicator>
            </View>
        );
    }

export default Loading;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  