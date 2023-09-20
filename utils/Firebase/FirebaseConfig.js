// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBIUufdeZnBeSc2YJrQa2LkmuBI3VTe5Ho',
  authDomain: 'food-ordering-app-e67d6.firebaseapp.com',
  projectId: 'food-ordering-app-e67d6',
  storageBucket: 'food-ordering-app-e67d6.appspot.com',
  messagingSenderId: '501970189881',
  appId: '1:501970189881:web:83f1c60ad9666d619817e8',
  measurementId: 'G-EL54LY0TPL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
export const provider = new GoogleAuthProvider()
