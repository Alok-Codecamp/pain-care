import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import google from '../../../image/Icon/google-icon.svg';
import useAuth from '../../../Hooks/useAuth'
import './Registration.css'
const Registration = () => {
   
    const {user,email,password,processLogin,registration,setEmail,setPassword,googleSignIn, setUserName}=useAuth();
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
    const getName=(e)=>{
        setUserName(e.target.value)
    }
    return (
        <div>
            <div className="registration-text">
            <h3>Registration </h3>
            <p>Pain care and make your life easy</p>
            </div>
            <form className="registration-from" onSubmit={handleSignInWithEmail}>
                <input onBlur={getName} type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input onBlur={handleEmail} type="email" placeholder="email" />
                <input onBlur={handlePassword} type="password" placeholder="password" />
                <input type="submit" />
            </form>
            <div className="google-signIn">
            <p>Already have an acount <Link to="/login">Login</Link> </p>
            <button onClick={googleSignIn}>
                <img src={google} alt="" />
            </button>
            </div>
        </div>
    );
};

export default Registration;