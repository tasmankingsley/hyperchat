import { auth, db } from './App';
import { collection, doc, deleteDoc } from "firebase/firestore";

export default function ChatMessage(props) {
    const messagesRef = collection(db, "messages");

    const { text, uid, photoURL } = props.message;
    // console.log(props.id);
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';


    const delete_message = () => {
        // const { uid, photoURL } = auth.currentUser;

        // await deleteDoc(doc(db, "messages", ));

        console.log(props.id);

    };
  
    return (
      <div className={`message-img-div ${messageClass}`} onClick={delete_message} >
        <p className={`message  message-${messageClass}`}>
            {text}
        </p>  
        <img src={photoURL} />
      </div>
    )
}
