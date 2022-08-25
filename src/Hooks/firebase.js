import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from '../firebase.init'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            }))
    }
    return {
        user,
        signInWithGoogle
    }
}

export default useFirebase;