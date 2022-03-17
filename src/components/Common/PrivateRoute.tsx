import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  let location = useLocation();
  // Check login
  const isLogin = Boolean(localStorage.getItem('access_token'));

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
}
