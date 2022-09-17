import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './pages/Login';

function App() {
  const loginStatus = useSelector((state) => state.auth.isLogin);

  return (
    <div className="App">
      <Login />
      {loginStatus ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
    </div>
  );
}

export default App;
