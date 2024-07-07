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
    <div className='flex flex-col text-center text-white gap-5'>
        <form onSubmit={createAccount}>
            <h1 className=' text-3xl m-10 mt-16 font-bold '>Create a new account</h1>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col items-center gap-6'>
                   <input type='email' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='px-8 py-3 rounded-lg focus:outline-none text-black'></input>

                    <input type='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='px-8 py-3 rounded-lg focus:outline-none text-black'></input>

                    <div className='py-3 px-10 rounded-lg cursor-pointer bg-white text-black border border-transparent hover:bg-slate-700 hover:text-white hover:border-white transition duration-300'>
                        <button type='submit'>Create</button>
                    </div>
                </div>
            </div>
        </form>

        <div className='flex justify-center gap-5'>
            <p>Already have an account? </p>
            
            <div className=' text-rose-700 hover:text-rose-800 underline hover:font-semibold hover:transition duration-300 hover:ease-in'>
                <Link to='/login'>Login</Link> 
            </div>
        </div>
    </div>
  )
}
