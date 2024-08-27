// eslint-disable-next-line no-use-before-define

import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import {Navigate } from "react-router-dom";

const useAuth = () => {
  const token = useSelector((state) => state.Auth.token);
  if (token) {
    return true;
  }

  return false;

};

export default function PublicRoutes({ children , paths }) {
  const auth = useAuth();
  const role = useSelector((state) => state.Auth.role);

  if (auth) {
    if (role === "Admin") {
      return <Navigate to="/Admin" />;
    }
    if (role === "FinancialAdviser") {
      return <Navigate to="/FinancialAdviser" />;
    }
  } else {
    return <>{children}</>;
  }
};



PublicRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};