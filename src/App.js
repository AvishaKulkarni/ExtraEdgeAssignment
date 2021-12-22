import './App.css';
import LoginPage from './App_Components/LoginPage';
import LogOut from './App_Components/Logout';
import React from "react";
import { useSelector } from 'react-redux';
import { selectUser } from './app/features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
        {user ? <LogOut />:<LoginPage />}
    </div>
  );
}

export default App;
