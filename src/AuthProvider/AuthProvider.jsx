import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GithubAuthProvider } from "firebase/auth";

// social login auth provider
const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()

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

//  logut 
const logOut = () =>{
    setUser(null)
    signOut(auth)
}
         

    //    social github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    //  googleLogin
   const googleLogin = () =>{
    console.log('this 9is  gogleprovider');
    return signInWithPopup(auth, googleProvider)
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
      signInUser,
      googleLogin,
      githubLogin,
      logOut,
      user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;