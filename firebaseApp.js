import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAiv5XhvEASpLvHharR-QRnU6_0EbTgO2M",
    authDomain: "schoolmanagement-b2af0.firebaseapp.com",
    databaseURL: "https://schoolmanagement-b2af0.firebaseio.com",
    projectId: "schoolmanagement-b2af0",
    storageBucket: "schoolmanagement-b2af0.appspot.com",
    messagingSenderId: "1082391287446",
    appId: "1:1082391287446:web:fea20d5ce55aab545454b7"
  };

var firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;