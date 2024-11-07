// firebase/auth.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig';  // Import the Firebase app

const auth = getAuth(app);

// Email and password signup
const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Google OAuth signup
const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Function to handle login (optional, in case you use email login)
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout functionality
const logout = () => {
  return signOut(auth);
};

// Check authentication state
const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, register, login, loginWithGoogle, logout, checkAuthState };
