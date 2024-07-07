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
        <div className='flex flex-col text-center text-white gap-5'>
            <form onSubmit={loginAccount}>
                <h1 className=' text-3xl m-10 mt-16 font-bold '>Login</h1>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col items-center gap-6'>
                        <input 
                            type='email' 
                            placeholder='Enter your email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='px-8 py-3 rounded-lg focus:outline-none text-black'
                        />
                        <input 
                            type='password' 
                            placeholder='Enter your password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className='px-8 py-3 rounded-lg focus:outline-none text-black' ></input>

                        <div className='py-3 px-10 rounded-lg cursor-pointer bg-white text-black border border-transparent hover:bg-slate-700 hover:text-white hover:border-white transition duration-300'>
                            <button type='submit'>Login</button>
                        </div>

                    </div>

                </div>
            </form>

            <div className='flex justify-center gap-5'>
                <p>Don't have an account? </p>

                <div className=' text-rose-700 hover:text-rose-800 underline hover:font-semibold hover:transition duration-300 hover:ease-in'>
                    <Link to='/'>Create</Link>
                </div>
                
            </div>

        </div>
    );
}
