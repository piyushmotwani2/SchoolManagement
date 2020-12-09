import React, { useState, useEffect, useCallback, useContext } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import firebaseApp from '../firebaseApp'
import GlobalState from '../context/GlobalState';
import { useNavigation } from '@react-navigation/native';


const db = firebaseApp.firestore();

export default function Chat({route}) {
  const [state, setState] = useContext(GlobalState);
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const {roomID} = route.params;
  const chatsRef = db.collection(roomID);
  useEffect(() => {
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
        const messagesFirestore = querySnapshot
            .docChanges()
            .filter(({ type }) => type === 'added')
            .map(({ doc }) => {
                const message = doc.data()
                return { ...message, createdAt: message.createdAt.toDate() }
            })
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
}, [])

const appendMessages = useCallback(
  (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  },
  [messages]
)

async function handleSend(messages) {
  const writes = messages.map((m) => chatsRef.add(m))
  await Promise.all(writes)
}

return (
        <View style = {{height:"100%"}}>
          <View style={{height:"10%"}}>
            <TouchableOpacity onPress = {() => navigation.goBack()} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 15, height: 27,marginLeft:"10%"}}><ImageBackground source={require('../assets/arrow_back.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
          </View>
          <GiftedChat messages={messages} user= {{_id: state.user.email,name: state.user.name}} onSend={handleSend} />
        </View>)
}