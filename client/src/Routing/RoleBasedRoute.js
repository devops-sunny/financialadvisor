import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

RoleBasedRoute.propTypes = {
  accessibleRoles: PropTypes.array, 
  children: PropTypes.node,
};

const useCurrentRole = () => {
  const role = useSelector((state) => state.Auth.role);
  return role;
};

export default function RoleBasedRoute({ accessibleRoles, children , paths }) {
  const currentRole = useCurrentRole();
  const navigate = useNavigate();

  useEffect(()=>{
   if(currentRole === ""){
    navigate("/")
   }else{
    navigate(paths)
   }
  },[children, currentRole, navigate, paths])


  if (!accessibleRoles.includes(currentRole)) {
    return <p>You do not have permission to access this page</p>;
  }

  return <>{children}</>;
}
