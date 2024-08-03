// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === 'hrusi@gmail.com' && password === '12345') {
      setUser({ email, role: 'admin' });
      navigate('/admin');
    } else {
      setUser({ email, role: 'user' });
      navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const authState = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={{ authState, login, logout }}>{children}</AuthContext.Provider>;
};
