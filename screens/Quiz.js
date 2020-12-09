import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, Linking , View, Text, SafeAreaView, ScrollView, ImageBackground, Button } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';
import GlobalState from '../context/GlobalState';
import { useNavigation } from '@react-navigation/native';
import quizData from '../util/QuizData';
import QuizComponent from '../components/QuizComponent'


export default function Quiz() {
    const [state,setState] = useContext(GlobalState);
    const [quizState,setQuizState] = useState({dataQuestion:[],score: 0,submitted: false})
    const navigation = useNavigation();
    useEffect(() => {
        setQuizState({
            dataQuestion: quizData,
            score:0
        })
    }, []);

    const onAnswered = (response) =>{
        if(response){
            const update = quizState.score;
            setQuizState({
                ...quizState,
                score: parseInt(update+1)
            })
        }
    }
    
    return(
        <ScrollView>
        <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
    <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",}}>Quiz</Text>
          <TouchableOpacity onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
        </View>
        <View style={{marginLeft:"auto",marginRight:"auto",marginTop:"15%", width:"80%"}}>
            {
                quizState.dataQuestion.map((question,index) => (
                    <QuizComponent key = {index} onAnswered = {onAnswered} question = {question.question} options = {question.options} correctIndex = {question.correctIndex}/>
                ))
            }
        <View style={{marginTop: "10%"}}>
        <Button title = "Submit test" onPress = {() => {setState({...state,quizSubmitted:true,quizScore: quizState.score});navigation.goBack();}}></Button>
        
        </View> 
        </View>
        </ScrollView>
    )
}