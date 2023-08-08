// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQG_174LeVH80FzAJqHnsNUJ0iT1Ktnd4',
  authDomain: 'stormdex.firebaseapp.com',
  projectId: 'stormdex',
  storageBucket: 'stormdex.appspot.com',
  messagingSenderId: '615275682998',
  appId: '1:615275682998:web:f22e71c258225b76d05a17',
  measurementId: 'G-VKVFK3RQNK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
