import './App.css';
import { useRef, useState } from 'react';
import ChatRoom from './ChatRoom';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth'

export const app = initializeApp({
  // config
  apiKey: "AIzaSyClXHyrSNWP9II-GB3fDostHKF3p_w9xiQ",
  authDomain: "hyprcht.firebaseapp.com",
  projectId: "hyprcht",
  storageBucket: "hyprcht.appspot.com",
  messagingSenderId: "549139552060",
  appId: "1:549139552060:web:03fc56b1949cd622177039"
})

export const auth = getAuth(app);
export const db = getFirestore(app);


// Main app entry point
export default function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <div className="header">
        <span className='header-text'>hyperchat</span>
        <div className='sign-out'><SignOut/></div>
      </div>
  
      <div className='container'>
        {user ? <ChatRoom/> : <SignIn/>}
      </div>

    </div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
  }

  // const signInAnonymously = () => {

  // } 

  return (
      <div className='sign-in-div'>
          <div className='welcome'>Welcome to hyperchat!</div>
          <p>Hyperchat is a simple public chat room where <br/> anyone can sign in to have a conversation.</p>
          <button className='sign-in' onClick={signInWithGoogle}>Sign in with Google</button>
          {/* <button className='sign-in' onClick={signInAnonymously}>Sign in anonymously</button> */}
      </div>
  )
}

function SignOut() {
  return auth.currentUser && (
      <div>
          <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
  )
}
