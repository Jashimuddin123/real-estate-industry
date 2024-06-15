import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className='w-1  mx-auto'> 
        <span className="loading loading-spinner text-center mx-auto loading-md"></span>
    </div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return  children

};

export default PrivateRoute;
