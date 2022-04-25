import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, hookError, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    useEffect(() => {
        if (user || googleUser) {
            navigate("/home")
        }
    }, [user || googleUser])

    if (googleLoading) {
        return <>
            <div class="loading-container">
                <div class="loading-span-container">
                    <span class="one loading-span"></span>
                    <span class="two loading-span"></span>
                    <span class="three loading-span"></span>
                    <span class="four loading-span"></span>
                </div>

            </div>
        </>
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords did not match")
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or long")
            console.log(password.length);
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title"> Sign Up </h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>

                    <input onClick={() => setAgree(!agree)} className='' type="checkbox" name="terms" id="terms" />
                    <label className={`${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accept Ema-John Terms and Conditions</label>


                    <p style={{ color: "red" }}>{error || hookError}</p>
                    <input
                        disabled={!agree}
                        type="submit"
                        value="sign up"
                        className={`${!agree ? "form-submit-disabled" : "form-submit"}`} />
         
                </form>

                <p className='form-suggestion'>
                    Already have an account? <Link className='form-link' to="/login"> Login </Link>
                </p>


                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>

                <div className='input-wrapper'>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='google-auth'>
                        <img src='https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-32.png' alt='' />
                        <p className="my-auto"> Continue with Google </p>
                    </button>
                </div>


            </div>
        </div>
    );
};

export default SignUp;