import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase_config';
import { signOut } from 'firebase/auth';

export default function Main() {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out");
            navigate('/login'); 
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            {user ? (
                <div className=' flex flex-row p-10 justify-between'>
                    <p className='text-white text-xl text-left'>Welcome, {user.email} !!</p>
                    <button onClick={logOut} className='py-2 px-5 rounded-lg cursor-pointer bg-white text-black border border-transparent hover:bg-slate-700 hover:text-white hover:border-white transition duration-300'>Log Out</button>
                </div>
            ) : (
                <p>You are not logged in</p>
            )}
        </div>
    )
}
