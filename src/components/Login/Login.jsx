import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import App from '../../App';
import app from '../../firebase/firebase.config';


const Login = () => {
   
    const handlelogin = event =>{
        const form = event.target
        const email = from.email.value 
        console.log(email)
    }

   
   
    return (
        <div className='form-container' >

            <h2 className='form-title'>Login</h2>
            <form onSubmit={handlelogin} >
            <div className="form-control">
                <label className='label' >Email:</label>
                <input className='email' type="email" name='email' placeholder='type your email' required />
            </div>
            <div className="form-control">
                <label className='label' >Password:</label>
                <input className='email' type="password" name='password' placeholder='type your password' required />
            </div>
            <input  className='primary-button' type="button" value="Login" />

             <p className='text'>New to mehedi Ema-john?  <Link className='link' to='/signup'>Create New Account</Link> </p>
            </form>

           


        </div>
    );
};

export default Login;