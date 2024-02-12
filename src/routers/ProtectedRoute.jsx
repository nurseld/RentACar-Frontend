import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Gerçek duruma uygun olarak kontrol edin

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route element={children} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;