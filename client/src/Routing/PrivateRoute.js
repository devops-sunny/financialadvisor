import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const useAuth=()=>{
  const token = useSelector(state =>state.Auth.token)

 if(token){
    return true
  } else {
    return false
  }
}

const PrivateRoute = ({children,roles}) => {
  let location = useLocation();
  const auth=useAuth()

   return !auth ? <Navigate to="/" state={{ from: location }} /> :children;
};

export default PrivateRoute;
