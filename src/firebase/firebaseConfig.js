import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBGRqjVt2DD7moml7mOBJdxChC32gPs824",
    authDomain: "deepfake-detector-4217f.firebaseapp.com",
    projectId: "deepfake-detector-4217f",
    storageBucket: "deepfake-detector-4217f.firebasestorage.app",
    messagingSenderId: "1051840243220",
    appId: "1:1051840243220:web:668c8e27d556f925252901",
    measurementId: "G-TYYW57CX6W"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const storage = getStorage(app);

export { app, auth, storage };