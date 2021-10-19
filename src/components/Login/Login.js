import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState("");
    const {user,processLogin,registration}=useFirebase();
    
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSignInWithEmail=(e)=>{
        e.preventDefault();
      registration(email,password)
    }
    return (
        <div>
            <form onSubmit={handleSignInWithEmail}>
                <input onBlur={handleEmail} type="email" />
                <input onBlur={handlePassword} type="password" />
                <input type="submit" />
            </form>
            <h2>{user.email}</h2>
        </div>
    );
};

export default Login;