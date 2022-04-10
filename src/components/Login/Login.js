import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if(user) {
        navigate(from, {replace: true})
    }

    const handleUserLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
          <div>
            <h2 className="form-title"> Login </h2>
            <form action="" onSubmit={handleUserLogin}>
             <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{color: "red"}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }

            <input type="submit" value="submit" className='form-submit' required/>
            </form>
            <p className="form-suggestion">
                New to Ema-John? <Link className='form-link' to="/signup"> Create an account </Link>
            </p>

            <div className='horizontal-divider'>
              <div className='line-left' />
               <p>or</p>
              <div className='line-right' />
           </div>

            <div className='input-wrapper'>
            <button className='google-auth'>
                <img src='https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-32.png' alt='' />
                <p className="my-auto"> Continue with Google </p>
            </button>
            </div>

      </div>
    </div>
    );
};

export default Login;