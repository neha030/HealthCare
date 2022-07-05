
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = ({
  
        apiKey: "AIzaSyD1VjrBzvXZycpoqxiV6VGIKp-o3Lx6A1w",
        authDomain: "healthcare-1f8c8.firebaseapp.com",
        projectId: "healthcare-1f8c8",
        storageBucket: "healthcare-1f8c8.appspot.com",
        messagingSenderId: "351603354021",
        appId: "1:351603354021:web:92554a838e7bcbd610204c"
    
});

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  export default firebase