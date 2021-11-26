import firebase from "firebase/compat";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0S_VfIas4tttdfds5CPgkYhA2JVUqQ-Y",
  authDomain: "netflix-clone-9db2f.firebaseapp.com",
  projectId: "netflix-clone-9db2f",
  storageBucket: "netflix-clone-9db2f.appspot.com",
  messagingSenderId: "1041495464835",
  appId: "1:1041495464835:web:763c71c39d93967bc734b6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};
export default db;