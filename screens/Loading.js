import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import GlobalState from '../context/GlobalState';
import firebaseApp from '../firebaseApp'
import { useNavigation } from '@react-navigation/native';
import { useScreens } from 'react-native-screens';
import classes from '../Utilties/ClassSection';
import users from '../Utilties/Users';
import subjects from '../Utilties/Subject';



function Loading() {
    const db = firebaseApp.firestore();
    const [state, setState] = useContext(GlobalState);
    const navigation = useNavigation();
    useEffect(() => {
        // firebaseApp.auth().signOut();
        // firebaseApp.auth().createUserWithEmailAndPassword('shruti.mishra@vitap.ac.in','testpass123').then(user=>{
        //     console.log('userCreated');
        // })
        // firebaseApp.auth().signInWithEmailAndPassword('shruti.mishra@vitap.ac.in','testpass123').then(user=>{
        //     console.log('userSigned in')
        // })
        
        // firebaseApp.auth().createUserWithEmailAndPassword('rama.sathish@vitap.ac.in','testpass456').then(user=>{
        //     console.log('userCreated');
        // })

        // firebaseApp.auth().signInWithEmailAndPassword('rama.sathish@vitap.ac.in','testpass456').then(user=>{
        //     console.log('userSigned in')
        // })
        // firebaseApp.auth().currentUser.updateProfile({
        //     displayName: 'fac1003'
        // })
    
    firebaseApp.auth().onAuthStateChanged(user => {
        if(user){
            // firebaseApp.auth().currentUser.updateProfile({
            //     displayName: 'fac1003'
            // })
            const subscriber = db.collection("Users").doc(user.displayName).onSnapshot(doc => {
                if(doc.data().type == "student"){
                    const name = doc.data().name;
                    const classPath = doc.data().classSection;
                    const rollnum= doc.data().rollnum;
                    const attendance = doc.data().attendance;
                    const id = doc.data().id
                    getClass(name,classPath,rollnum,attendance,id);
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

            const getClass = async(name,regNum,rollnum,attendance,id) =>{
                await db.doc(regNum).get().then(classnm =>{
                    let subjectArray = [];
                    classnm.data().subjects.forEach(async(sub) => {
                        await db.doc(sub).get().then(async(subs) => {
                            await subjectArray.push(subs.data());
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
                            timetable: classnm.data().Slots,
                            attendance: attendance,
                            id: id
                        }
                    });
                    navigation.navigate('Home');
                });
            }
        }
        else{
            navigation.navigate('Login');
        }
    });

    // classes.map(async function(clas){
    //     await firebaseApp.firestore().doc('ClassSection/' + clas.id).set(clas).then(()=>{
    //         console.log(clas.id," Updated");
    //     })
    // });
    // users.map(async function(clas){
    //     await firebaseApp.firestore().doc('Users/' + clas.id).set(clas).then(()=>{
    //         console.log(clas.id," Updated");
    //     })
    // });
    // subjects.map(async function(clas){
    //     await firebaseApp.firestore().doc('Subjects/' + clas.id).set(clas).then(()=>{
    //         console.log(clas.id," Updated");
    //     })
    // });
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
  