// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #faf3eb;
  padding: 10px;
  z-index: 1000;
`;

const Logo = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: black;
  margin: 0 10px;
  text-decoration: none;

  
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Navbar = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <NavbarWrapper>
      <Logo><NavLink to="/">B.planet</NavLink></Logo>
      <NavLinks>
        <NavLink to="/contact-us">Contact Us</NavLink>
        {authState.isAuthenticated ? (
          <>
            {authState.isAdmin && <NavLink to="/admin">Admin</NavLink>}
            <NavLink to="/profile">
              <ProfileImage src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login/Signup</NavLink>
        )}
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
