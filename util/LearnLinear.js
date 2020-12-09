import React, { useContext, useEffect, useState } from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { useNavigation } from '@react-navigation/native';
import GlobalState from '../context/GlobalState';
import testData from './testData'
import {  } from 'react-native-chart-kit'
import Svg, { Line } from 'react-native-svg';




export default function LearnLinear(){

    const [result,setResult] = useState({});
    const navigation = useNavigation();
    const [state,setState] = useContext(GlobalState);

    let m,b;
    const total = [];
    const grade = [];

    const learningRate = 0.5;
    const optimizer = tf.train.adam(learningRate);
    let grades;


    
    const getData = () =>{
      const carsDataResponse = testData;
      return carsDataResponse;
    }

    const loss = (pred, labels) =>{
      return pred.sub(labels).square().mean();
    }

    const train = () =>{
      optimizer.minimize(() => loss(predict(total),grades));
    }


    const pushData = () =>{
      getData().map((entry,index) => {
        total.push(entry.Total);
        grade.push(entry.Grade);
      })
    }

    const predict = (x_vals) => {
      const xs = tf.tensor1d(x_vals);

      return xs.mul(m).add(b);
    }

    useEffect(()=>{
      pushData();
      m = tf.variable(tf.scalar(0.0));
      b = tf.variable(tf.scalar(0.0));
      grades = tf.tensor1d(grade);

      train();
    },[]);

    return(
        <View style={{height:"100%"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
                <Text style={{fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",marginTop: "10%"}}>{state.user.className} Performance</Text>
                <TouchableOpacity onPress = {() => navigation.goBack()} style = {{marginLeft:"10%",marginRight:"5%",marginTop: "10%"}}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
            </View>

          <Svg height="100" width="100">
            <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
          </Svg>
        </View>
    )
}