// components/Routes.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export function PrivateRoute({ element }) {
  const { user } = useAuth();

  return (
    <Route
      element={user ? element : <Navigate to="/signin" replace />}
    />
  );
}

export function PublicRoute({ element }) {
  return <Route element={element} />;
}
