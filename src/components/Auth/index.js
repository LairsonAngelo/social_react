import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
import { setUserData } from '../../actions/accountAction';

function Auth({children}){  

  const dispatch = useDispatch();

  const iniAuth = useCallback(async () => {
    if(authService.isAuth()){ 
      await dispatch(setUserData);
    } 


  },[dispatch]);

  useEffect(() => {
    iniAuth();
  },[iniAuth]);
  
  return (  
    children
  );
}

export default Auth;