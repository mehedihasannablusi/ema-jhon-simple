import React, { useContext, useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../allprovider/AuthProvider';

const Signup = () => {

    const {user } = useContext(AuthContext)
    const{creatUsere} = useContext(AuthContext)

    const [error ,seterror] = useState(null)
    const signupwithgoogle = () =>{

        const auth = getAuth(app)
        const googleProveder = new GoogleAuthProvider;

         signInWithPopup(auth, googleProveder)
           .then((result) => {
            console.log(result.user)
           }).catch((error) => {
             
           });
     }

     const handlesignupbtn = (event) =>{
       
        event.preventDefault()
        console.log(event)
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword  = form.confirmPassword.value
      
        creatUsere(email,password)
        .then(result =>{
            const loguser = result
            console.log(loguser)
        })
        .catch(error =>{
            console.log(error)
        })


     }

    return (
        
        <div className='form-container' >
         
            <h2 className='form-title'>Sign Up</h2>
           <form onSubmit={handlesignupbtn}>
           <div className="form-control">
           <label className='label' >Email:</label>
            <input className='email' type="email" name='email' placeholder='type your email' required />
           </div>
           <div className="form-control">
           <label className='label' >Password:</label>
            <input className='email' type="password" name='password' placeholder='type your password' required />
           </div>
           <div className="form-control">
           <label className='label' > Confirm Password:</label>
            <input className='email' type="password" name='confirmPassword' placeholder='type your password' required />
            <p className='margin'>{user.name}</p>
           </div>
           <input className='primary-button' type="submit" value="Sign Up" />

       
           </form>

           <p className='text-error'>{error}</p>
          
           <button onClick={signupwithgoogle } className='primary-button'>Continue with Google</button>

           <p className='text'>Already have an account? <Link className='link' to='/login'>Login</Link> </p>

          </div>
        
    );
};

export default Signup;