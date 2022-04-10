import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    
    const handlePasswordBlur = event => {
        setEmail(event.target.value);
    }

    
    const handleConfirmPasswordBlur = event => {
        setEmail(event.target.value);
    }


    const handleCreateUser = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setError("Your two passwords did not match")
            return;
        }
    }

    return (
      <div className='form-container'>
        <div>
        <h2 className="form-title"> SignUp </h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name='email' required/>
        </div>

        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
        </div>
        
        <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
        
        </div>
        <p style={{color: "red"}}>{error}</p>
        <input type="submit" value="sign up" className='form-submit'/>
        <p className='form-suggestion'>
            Already have an account? <Link className='form-link' to="/login"> Login </Link>
        </p>
{/* 
        <div className='horizontal-divider'>
              <div className='line-left' />
               <p>or</p>
              <div className='line-right' />
           </div> */}
        </form>

        </div>
      </div>
    );
};

export default SignUp;