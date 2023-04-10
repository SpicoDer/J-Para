import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXj_-NUVA0ogaKTN27BS-mkpQqHTQXOCw',
  authDomain: 'para-9cf15.firebaseapp.com',
  databaseURL:
    'https://para-9cf15-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'para-9cf15',
  storageBucket: 'para-9cf15.appspot.com',
  messagingSenderId: '256796913287',
  appId: '1:256796913287:web:42a300a12b0d03ce8d9222',
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
