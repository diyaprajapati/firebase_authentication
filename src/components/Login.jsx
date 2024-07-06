import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase_config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginAccount = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/home'); 
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <form onSubmit={loginAccount}>
                <h1>Login</h1>
                <input 
                    type='email' 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type='password' 
                    placeholder='Enter your password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type='submit'>Login</button>
            </form>

            <p>Don't have an account? <Link to='/'>Create</Link></p>

        </div>
    );
}
