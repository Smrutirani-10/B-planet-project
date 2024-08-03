// src/components/ContactUs.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const ContactUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf3eb; 
  min-height: 100vh;
  padding-top: 60px; 
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #faf3eb; 
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  border: 1px solid #c8a092; 
`;

const Header = styled.h1`
  font-size: 2em;
  color: #2d2d2d;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StayUpdated = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  border-right: 1px solid #c8a092; /* Match border color */
`;

const Form = styled.form`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #c8a092; /* Match border color */
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #c8a092; /* Match border color */
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #c8a092; /* Match button background color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white; /* Ensure text is visible */
  &:hover {
    background-color: #b89e8e; /* Slightly darker shade for hover */
  }
`;

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <Navbar />
      <Container>
        <Header>Contact us</Header>
        <FormContainer>
          <StayUpdated>
            <h2>Stay Updated</h2>
            <p>Need to get in touch with us?</p>
            <p><a href="https://facebook.com">Facebook</a></p>
            <p><a href="https://instagram.com">Instagram</a></p>
          </StayUpdated>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <TextArea rows="5" placeholder="Message" />
            <Button type="submit">Submit</Button>
          </Form>
        </FormContainer>
      </Container>
    </ContactUsWrapper>
  );
};

export default ContactUs;
