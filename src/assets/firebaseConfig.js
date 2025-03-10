// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPpw8Tsg_M8y9lhoBov7p2Y6fDZSrnR68',
  authDomain: 'managment-market.firebaseapp.com',
  projectId: 'managment-market',
  storageBucket: 'managment-market.firebasestorage.app',
  messagingSenderId: '1063951043677',
  appId: '1:1063951043677:web:4079882d3d068e7b12d1b4',
  measurementId: 'G-1G7T7N7FPL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }