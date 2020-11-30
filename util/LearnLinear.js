import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import * as tf from '@tensorflow/tfjs';

async function learn(){
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    const xs = tf.tensor2d([-1,0,1,2,3,4], [6,1]);
    const ys = tf.tensor2d([-3,-1,1,3,5,7], [6,1]);

    await model.fit(xs,ys, {epochs: 250})

    model.predict(tf.tensor2d([20],[1,1])).print()
}

learn();

export default function LearnLinear(){
    return(
        <View style = {
            {
            "alignItems": "center",
            "justifyContent": "center",
            "marginHorizontal": 30
            }
          }><Text style = {{
              "color": "E9446A",
              "fontSize": 13,
              "textAlign": "center"
            }}>stuff</Text>
          </View>
    )
}