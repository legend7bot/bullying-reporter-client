import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

function Login() {
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    dispatch(login(data));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
