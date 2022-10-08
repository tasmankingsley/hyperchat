import './App.css';
import { useRef, useState } from 'react';
// import Header from './Header';
// import SignIn from './SignIn';
// import ChatRoom from './ChatRoom';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, serverTimestamp, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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
const db = getFirestore(app);

function App() {

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
      signInWithRedirect(auth, provider);
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

function ChatRoom() {

  const ghost_div = useRef()
  

  const messagesRef = collection(db, "messages");

  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  
  const sendMessage = async(e) => {

    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    ghost_div.current.scrollIntoView({ behaviour: 'smooth' });

  };

  console.log(messages);
  
  return (
      <div>
        <div className='chat-grid'>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>

        <form className='form' onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => {setFormValue(e.target.value)}} placeholder='say something to the chat' />
          <button type='submit'>send</button>
        </form>

        <div className='ghost-div' ref={ghost_div}></div>
      </div>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message-img-div ${messageClass}`}>
      <p className={`message  message-${messageClass}`}>{text}</p>   
      <img src={photoURL} />
    </div>
  )
}

export default App
