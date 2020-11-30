import React, {useContext, useState} from 'react';
import { TouchableOpacity, Linking , View, Text, SafeAreaView, ScrollView, ImageBackground, Button } from 'react-native';

export default function QuizComponent(props) {
    const [state,setState] = useState({selected: -1,answered: false})
    if(state.answered == true){
        return(
                <View>
                    
                    <Text>{props.question}</Text>    
                    <Button color = {state.selected == props.correctIndex ? "rgba(0,255,0,255)" : "rgba(255,0,0,255)" } onPress = {() => {}} title = {props.options[state.selected]}></Button>
                </View>
            );
    } 
    else{
        return(
        <View>
            <Text>{props.question}</Text>
            <View>
            <Button title = {props.options[0]} onPress= {() => {
                setState({
                    selected: 0,
                    answered: true
                })
                props.onAnswered(0 == props.correctIndex);
                }}>
            </Button>
            <Button title = {props.options[1]} onPress= {() => {
                setState({
                    selected: 1,
                    answered: true,
                })
                props.onAnswered(1 == props.correctIndex);
                }}></Button>
            <Button title = {props.options[2]} onPress= {() => {
                setState({
                    selected: 2,
                    answered: true
                })
                props.onAnswered(2 == props.correctIndex);
                }}></Button>
            <Button title = {props.options[3]} onPress= {() => {
                setState({
                    selected: 3,
                    answered: true
                })
                props.onAnswered(3 == props.correctIndex);
                }}></Button>
                </View>
        </View>
        );
    }
}