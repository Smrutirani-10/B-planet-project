// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import backgroundImage from '../resources/image/Login in page image.png'; // Adjust the path as necessary

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #faf3eb;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #c8a092;
`;

const ImageSection = styled.div`
  flex: 1;
  border-right: 1px solid #c8a092;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
`;


const StyledImage = styled.img`
  width: auto; /* Maintain aspect ratio */
  height: 300px; /* Fixed height */
  display: block; /* Remove inline spacing */
  object-fit: cover; /* Ensures the image covers its container */
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
`;




const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #fff;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const SubHeading = styled.p`
  margin-bottom: 30px;
  color: #888;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #c8a092;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  background-color: #c8a092;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SignupLink = styled.div`
  font-size: 14px;
  color: #333;
`;

const StyledLink = styled(Link)`
  color: #2e7d32;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  return (
    <Container>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ContentWrapper>
        <ImageSection>
          <StyledImage src={backgroundImage} alt="Login" />
        </ImageSection>
        <FormSection>
          <Heading>Login</Heading>
          <SubHeading>Welcome back !!</SubHeading>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
            <SignupLink>
              Don’t have an account yet? 
              <StyledLink to="/signup">Sign up for free</StyledLink>
            </SignupLink>
          </Form>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
