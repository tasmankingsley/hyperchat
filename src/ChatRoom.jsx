import { useRef, useState, useEffect } from 'react';
import { collection, query, orderBy, limit, serverTimestamp, addDoc, getDocs, onSnapshot, where } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, db } from './App';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {

    const ghost_div = useRef();

    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy('createdAt'), limit(50));
    

    const [messages] = useCollectionData(q, {idField: 'id'});
    // console.log(messages);

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

    };

    useEffect(() => {
        ghost_div.current.scrollIntoView({ behavior: 'smooth' });
    })

    return (
        <div>
            <div className='chat-grid'>
                {messages && messages.map(msg => (
                    <ChatMessage key={msg.id} id={msg.id} message={msg} />
                ))}
            </div>

            <form className='form' onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => {setFormValue(e.target.value)}} placeholder='say something to the chat' />
                <button type='submit'>send</button>
            </form>

            <div className='ghost-div' ref={ghost_div}></div>
        </div>
    )
}
