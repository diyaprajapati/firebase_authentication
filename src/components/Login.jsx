import React, { useState, useEffect } from 'react'
import { auth } from '../firebase_config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const loginAccount = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const loggedInUser = userCredential.user;
            setUser(loggedInUser);

        })
        .catch((error) => {
            console.log(error)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            console.log("sign out")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
        });

        return() => unSubscribe();
    }, [])

  return (
    <div>
        <form onSubmit={loginAccount}>
            <h1>Login</h1>

            <input type='email' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <input type='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <button type='submit'>Login</button>
        </form>

        {user? (
            <div>
                <p>Welcome, {user.email} !!</p> 
                <button onClick={logOut}>Log Out</button> 
            </div>
        ) : (
            <p>You are not logged in</p>
        )}
    </div>
  )
}
