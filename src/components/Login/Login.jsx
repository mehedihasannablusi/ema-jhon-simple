import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import App from '../../App';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../allprovider/AuthProvider';



const Login = () => {
   
    const {  singIn} = useContext(AuthContext)
   
    const handlelogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
      
       
        singIn(email ,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
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
            <input  className='primary-button' type="submit" value="Login" />

             <p className='text'>New to mehedi Ema-john?  <Link className='link' to='/signup'>Create New Account</Link> </p>
            </form>

           


        </div>
    );
};

export default Login;