import React from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';

const AdminContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const AddItemButton = styled.button`
  padding: 10px;
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  cursor: pointer;
`;

const AdminPage = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate('/add-item');
  };

  return (
    <AdminContainer>
      <HomePage />
      <AddItemButton onClick={handleAddItem}>Add Item</AddItemButton>
    </AdminContainer>
  );
};

export default AdminPage;
