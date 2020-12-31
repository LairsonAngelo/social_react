import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';

function GuestRoute({element: Component, ...rest}) {
  // const isAuth = authService.isAuth();
  const account = useSelector(state => state.account);
  const isAuth = Boolean(account.user);


  
  return (
    <Route {...rest} element={(
      isAuth 
      ? <Home />
      : Component
    )}/>
  );
}

export default GuestRoute;