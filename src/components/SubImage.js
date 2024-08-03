import React from 'react';
import styled from 'styled-components';

const SubImageWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  colour: black;
  border: 1px solid #ccc;
  cursor: pointer;
  img {
    width: 50px;
    height: 100px;
  }
`;

const SubImage = ({ src, onClick }) => {
  return (
    <SubImageWrapper onClick={onClick}>
      <img src={src} alt="Sub" />
    </SubImageWrapper>
  );
};

export default SubImage;
