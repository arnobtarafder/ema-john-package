import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className="form-title"> Shipping Information </h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name='name' required/>
        </div>

        <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="text" name="text" id="" required/>
        </div>

        <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="text" id="" required/>
        </div>
        
        <div className="input-group">
            <label htmlFor="phone">Phone NUmber</label>
            <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required/>
        
        </div>
        <p style={{color: "red"}}>{error}</p>
        <input type="submit" value="Add Shipping" className='form-submit'/>
        </form>

        </div>
      </div>
    );
};

export default Shipment;