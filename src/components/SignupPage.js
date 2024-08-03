// src/components/SignupPage.js
import React from 'react';
import styled from 'styled-components';

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F5F1E9;
`;

const SignupBox = styled.div`
  background-color: #FFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignupPage = () => {
  return (
    <SignupWrapper>
      <SignupBox>
        <h2>Signup</h2>
        <p>Signup form will be here</p>
      </SignupBox>
    </SignupWrapper>
  );
};

export default SignupPage;
