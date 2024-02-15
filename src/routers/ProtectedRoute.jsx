import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => { 
  const isAuthenticated = true; // TODO

  return isAuthenticated?(<Routes>{children}</Routes>):(<Navigate to="/login" replace />);};


ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
