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
