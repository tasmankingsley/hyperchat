import './App.css';
// import Header from './Header';
// import SignIn from './SignIn';
// import ChatRoom from './ChatRoom';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, query, orderBy, limit } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
      signInWithPopup(auth, provider);
  }  

  return (
      <div>
          <button className='sign-in' onClick={signInWithGoogle}>Sign in</button>
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

  const messagesRef = collection(db, "messages");
  // const q = messagesRef;

  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, {idField: 'id'});
  

  console.log(messages);
  
  return (
      <div>
        <div>Welcome to the chatroom</div>

        <div className='message-grid'>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
      </div>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>   
    </div>
  )
}

export default App
