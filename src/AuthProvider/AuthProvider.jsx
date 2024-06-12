import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

// create contex
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
   console.log(user);
  // Create user function
  const createUser = (email, password) =>{
    return  createUserWithEmailAndPassword(auth, email, password)
 };
       
   
    // sign in user
    const signInUser = (email, password) =>{
        return  signInWithEmailAndPassword(auth, email, password)
       }

    // Observer
    useEffect(()=>{
            
        onAuthStateChanged(auth, (user) => {
            if (user) {
                  setUser(user)
            }
          });

    },[])

    // received value
    const authInfo = {
      createUser,
      signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;