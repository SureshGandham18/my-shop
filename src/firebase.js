import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "AIzaSyAdNGpJf8n1Kt74IonqLgKgYeEXSa1Sbvg",
  authDomain: "sample-282da.firebaseapp.com",
  databaseURL: "https://sample-282da-default-rtdb.firebaseio.com",
  projectId: "sample-282da",
  storageBucket: "sample-282da.appspot.com",
  messagingSenderId: "219756773182",
  appId: "1:219756773182:web:f088b23984feca51d5766f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };