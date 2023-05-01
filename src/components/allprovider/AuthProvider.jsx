import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)



const user = {
    name: 'mehedi hasan'
}

const creatUsere = (email,password) =>{
 return createUserWithEmailAndPassword (auth , email, password)
}

const singIn = (email , password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const UserInformation = {
    user ,
    creatUsere  ,
  
    singIn
  
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={UserInformation}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;