import * as firebase from "firebase"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCP5EAUgR-f1nQfFd0HbyOx0CJY9LGzYew",
    authDomain: "moody-app-2f024.firebaseapp.com",
    projectId: "moody-app-2f024",
    storageBucket: "moody-app-2f024.appspot.com",
    messagingSenderId: "977077144320",
    appId: "1:977077144320:web:a2c6603f3f4139c1e381e5"
  };

  let app 
  
  if( firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app()
  }

  const db = app.firestore()

  export {db}