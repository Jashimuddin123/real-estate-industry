import { GoogleAuthProvider, createUserWithEmailAndPassword,
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, 
     FacebookAuthProvider} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
// import { GithubAuthProvider } from "firebase/auth";

// social login auth provider
const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

// create contex
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   console.log(user);
  // Create user function
  const createUser = (email, password) =>{
    setLoading(true)
    return  createUserWithEmailAndPassword(auth, email, password)
 };

    // sign in user
    const signInUser = (email, password) =>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
       }

//  logut 
const logOut = () =>{
    setLoading(true)
    setUser(null)
    signOut(auth)
}
        //  facebook 
        const facebookLogin = () =>{
            return signInWithPopup(auth, facebookProvider)
        }

    //    social github login
    const githubLogin = () =>{
        setLoading(true)
        console.log(githubLogin);
        return signInWithPopup(auth, githubProvider)
    }
    //  googleLogin
   const googleLogin = () =>{
    setLoading(true)
  
    return signInWithPopup(auth, googleProvider)
     }

    // Observer
    useEffect(()=>{
            
        const unSubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                  setUser(user)
                  setLoading(false)
            }
          });
          return() =>{
            unSubscribe()
          }
    },[])

    // received value
    const authInfo = {
      createUser,
      signInUser,
      googleLogin,
      facebookLogin,
      githubLogin,
      logOut,
      user,
      loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;