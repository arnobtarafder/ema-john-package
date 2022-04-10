import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
          <div>
            <h2 className="form-title"> Login </h2>
            <form action="">
             <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
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