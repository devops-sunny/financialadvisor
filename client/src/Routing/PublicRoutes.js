import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = useSelector((state) => state.Auth.token);
  if (token) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = (props) => {
  const auth = useAuth();
  const role = useSelector((state) => state.Auth.role);

  if (auth) {
    if (role === "Admin") {
      return <Navigate to="/doctor" />;
    }
    if (role === "Doctor") {
      return <Navigate to="/patient" />;
    }
    if (role === "Pharmacy") {
      return <Navigate to="/search-prescription" />;
    }
    if (role === "Manager") {
      return <Navigate to="/patient" />;
    }
  } else {
    return <Outlet />;
  }
};

export default PublicRoutes;
