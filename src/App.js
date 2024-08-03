// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import DescriptionPage from './components/DescriptionPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminPage from './components/AdminPage';
import AddItemPage from './components/AddItemPage';
import { ItemProvider } from './context/ItemContext';

const App = () => {
  return (
    
    <ItemProvider>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/description/:id" element={<DescriptionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/add-item" element={<AddItemPage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </ItemProvider>
  );
};

export default App;