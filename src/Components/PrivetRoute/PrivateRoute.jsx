import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
   
    return (
        <div>
            {children}
        </div>
    )
   }
   
    
//    return <Navigate state={location.pathname} to="/login"></Navigate>

export default PrivateRoute;