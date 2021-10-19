import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import google from '../../../image/Icon/google-icon.svg';
import './Login.css'
const Login = () => {
    const location = useLocation();
    const history=useHistory();
    const { user, processLogin, email, password, setPassword, setEmail, googleSignIn,setIsLoading,setUser } = useAuth();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        processLogin(email, password);
    }
    const redirect_uri=location.state?.from||'/home';
    const handleGoogleLogin=()=>{
       googleSignIn()
       .then(result=>{
       setUser(result.user)
        history.push(redirect_uri)
    })
    .finally(()=>setIsLoading(false))
    }
    return (
        <div className="login-form-container">
            <h3>Login Pain care</h3>
            <form onSubmit={handleLogin} className="login-form" action="">
                <input onBlur={handleEmail} type="email" placeholder="Email" />
                <input onBlur={handlepassword} type="password" placeholder="password" />
                <input type="submit" />
            </form>
            <div className="google-signIn">
                <p>New User ? <Link to="/registration">Registration</Link></p>
                <p>Or</p>

                <button onClick={handleGoogleLogin}>
                    <img src={google} alt="" />
                </button>
            </div>

        </div>
    );
};

export default Login;