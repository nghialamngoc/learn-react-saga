import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute(props: RouteProps) {
  // Check login
  const isLogin = Boolean(localStorage.getItem('access_token'));

  if (!isLogin) {
    return <Redirect to="/login"></Redirect>;
  }

  return <Route {...props}></Route>;
}
