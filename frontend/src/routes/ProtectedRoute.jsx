import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { token, role } = useContext(AuthContext);

  const isAllowed = token && allowedRoles.includes(role);
  return isAllowed ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
