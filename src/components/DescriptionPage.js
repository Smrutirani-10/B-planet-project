// src/components/DescriptionPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  #faf3eb;
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #faf3eb;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #2d2d2d;
`;

const PlantCareGuide = styled.div`
  margin-top: 20px;
`;

const GuideTitle = styled.h2`
  font-size: 1.5em;
  color: #2d2d2d;
`;

const GuideItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ItemTitle = styled.div`
  font-weight: bold;
`;

const ItemDescription = styled.div`
  color: #555;
`;

const DescriptionSection = styled.div`
  margin-top: 20px;
`;

const DescriptionText = styled.p`
  color: #555;
`;

const Image = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 8px;
`;

const DescriptionPage = () => {
  const { id } = useParams();
  const imageSrc = require(`../resources/image/image ${id}.png`); 
  const description = `This is the description for image ${id}.`; 

  return (
    <DescriptionWrapper>
      <Navbar />
      <Container>
        <Header>
          <Title>Tree {id}</Title>
          <Image src={imageSrc} alt={`Subimage ${id}`} />
        </Header>
        <PlantCareGuide>
          <GuideTitle>Plant Care Guide</GuideTitle>
          <GuideItem>
            <ItemTitle>Water</ItemTitle>
            <ItemDescription>Allow the soil to dry out completely before watering.</ItemDescription>
          </GuideItem>
          <GuideItem>
            <ItemTitle>Light</ItemTitle>
            <ItemDescription>Bright indirect light environments.</ItemDescription>
          </GuideItem>
          <GuideItem>
            <ItemTitle>Tips</ItemTitle>
            <ItemDescription>Gently insert a toothpick into the soil to determine if your plant needs watering.</ItemDescription>
          </GuideItem>
        </PlantCareGuide>
        <DescriptionSection>
          <GuideTitle>Description</GuideTitle>
          <DescriptionText>
            A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening.
            Keep away from children and pets. Plants images depicted are solely for illustration purposes only.
          </DescriptionText>
        </DescriptionSection>
      </Container>
    </DescriptionWrapper>
  );
};

export default DescriptionPage;
