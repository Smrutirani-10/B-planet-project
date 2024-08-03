import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top:50px;
  background-color: #faf3eb;
`;

const ProfileBox = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

const ProfilePage = () => {
  const { authState } = useAuth();
  const [name, setName] = useState(authState.user ? authState.user : '');
  const [email, setEmail] = useState(authState.user ? authState.user : '');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Navbar />
      <ProfileBox>
        <ProfileImage src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
        <h2>Profile</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <Button type="submit">Update Profile</Button>
        </Form>
      </ProfileBox>
    </Container>
  );
};

export default ProfilePage;
