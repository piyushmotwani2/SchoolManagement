import React, { useState, useEffect, useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import firebaseApp from '../firebaseApp'
import GlobalState from '../context/GlobalState';


const db = firebaseApp.firestore();

export default function Chat({route}) {
  const [state, setState] = useContext(GlobalState);
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

return <GiftedChat messages={messages} user= {{_id: state.user.email,name: state.user.name}} onSend={handleSend} />

}