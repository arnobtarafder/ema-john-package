import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
      <div className='form-container'>
        <div>
        <h2 className="form-title"> SignUp </h2>
        <form action="">
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirm-password" id="" required/>
        </div>
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