import auth from './App'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }  

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in</button>
        </div>
    )
}
  
export default SignIn