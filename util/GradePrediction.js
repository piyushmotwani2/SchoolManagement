import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView,TextInput, ScrollView, ImageBackground } from 'react-native';
import * as tf from '@tensorflow/tfjs'


class GradePrediction extends React.Component {
    state = {
        isTfReady: false,
        isModelReady: false
    }
    
    async componentDidMount() {
        await tf.ready()
        this.setState({
            isTfReady: true
        })

        // const inputLayer = tf.layers.input({shape: [1000]});
        // const dense1 = tf.layers.dense({units: 15,activation: 'relu'}).apply(inputLayer);
        // const dense2 = tf.layers.dense({units: 10,activation: 'relu'}).apply(dense1);
        // const outputLayer = tf.layers.dense({shape: [1],activation: 'softmax'}).apply(dense2);

        // const model = tf.model({inputs: inputLayer,outputs: outputLayer});

        // console.log(model.summary());

    
        console.log(this.state.isTfReady)
    }

    render() {
        return (
            <View style ={{height: "100%"}}>
                <View style={{flexDirection:"row",marginTop: "10%",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"10%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
                    <Text style={{ fontSize:24, color:"#121212", textAlignVertical:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%",}}> Class Performance </Text>
                    <TouchableOpacity style={{marginRight:"10%",}} onPress = {() => navigation.goBack()}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"10%",marginRight:"10%",}}></ImageBackground></TouchableOpacity>
                </View>
                <Text>TFJS ready? {this.state.isTfReady ? <Text>Yes</Text> : ''}</Text>
            </View>
        )
    }
}



export default GradePrediction;