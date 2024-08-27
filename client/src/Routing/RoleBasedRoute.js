import PropTypes from "prop-types";
import { Container, Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../redux/Auth/Action";


RoleBasedRoute.propTypes = {
  accessibleRoles: PropTypes.array, // Example ['admin', 'leader']
  children: PropTypes.node,
};

const useCurrentRole = () => {
  const role = useSelector((state) => state.Auth.role);
  return role;
};

export default function RoleBasedRoute({ accessibleRoles, children }) {
  const currentRole = useCurrentRole();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    return !isAuthenticated && navigate("/");
  }, [isAuthenticated]);
  
  useEffect(() => {
    if (token === null) {
      dispatch(logout());
      return <Navigate to={"/"} />;
    }
  });

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
}
