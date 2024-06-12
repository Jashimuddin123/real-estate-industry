import { createContext } from "react";

// create contex
const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    // received value
    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;