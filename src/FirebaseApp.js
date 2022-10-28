import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBq4fMbza1hoLiV57Lts_qJzolVL6WpAZw",
    authDomain: "ifind-462fa.firebaseapp.com",
    projectId: "ifind-462fa",
    storageBucket: "ifind-462fa.appspot.com",
    messagingSenderId: "648347975103",
    appId: "1:648347975103:web:6734e6113d03a0d12db50a"
  };

  const fbApp=initializeApp(firebaseConfig)

export default fbApp
export const db=getFirestore(fbApp)