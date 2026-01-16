// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7vyQpCd30q2X8IoN99hAeFiHj6ZYW9tU',
  authDomain: 'my-posts-project-7c0c6.firebaseapp.com',
  projectId: 'my-posts-project-7c0c6',
  storageBucket: 'my-posts-project-7c0c6.firebasestorage.app',
  messagingSenderId: '58912417278',
  appId: '1:58912417278:web:9f826719956add4bf40caf',
  measurementId: 'G-GW9N7J9ENZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
