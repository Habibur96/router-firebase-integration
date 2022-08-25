import React from 'react';
import useFirebase from '../Hooks/firebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <br />
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle}>Google Sign In</button>

            <form>
                <br />
                <input type="email" name="" id="" placeholder='Your email' /> <br /> <br />
                <input type="password" name="" id="" placeholder='Your password' /> <br /> <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;