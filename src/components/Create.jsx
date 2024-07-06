import React, { useState } from 'react'
import { auth } from '../firebase_config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
// import Login from './Login';

export default function Create() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <form onSubmit={createAccount}>
            <h1>Create a new account</h1>

            <input type='email' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <input type='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <button type='submit'>Create</button>
        </form>

        <p>Already have an account? <Link to='/login'>Login</Link> </p>
    </div>
  )
}
