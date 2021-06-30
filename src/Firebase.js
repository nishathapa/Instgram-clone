
import firebase from "firebase";
// import 'firebase/firestore';

  const firebaseApp = firebase.initializeApp (
    {
        apiKey: "AIzaSyDarKHr1j6hpZF5jpr006YxAFmOflBhD84",
        authDomain: "instagram-clone-2cb36.firebaseapp.com",
        projectId: "instagram-clone-2cb36",
        storageBucket: "instagram-clone-2cb36.appspot.com",
        messagingSenderId: "589960605705",
        appId: "1:589960605705:web:6f4746496dc6dd878d08d8",
        measurementId: "G-MY3E9BDFCW"
      });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

//   export default firebaseConfig;