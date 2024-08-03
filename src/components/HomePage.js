// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useItems } from '../context/ItemContext';
import home1 from '../resources/image/Hero image 1.png';
import home2 from '../resources/image/hero image 2.png';

const para = {
  fontSize: '50px',
  color: 'green',
};

const HomePageWrapper = styled.div`
  background-color: #f5f1e9;
  padding-top: 60px;
`;

const TextImageContainer = styled.div`
  display: flex;
  padding-right: 220px;
  gap: 10px;
`;

const TextSection = styled.div`
  padding-left: 220px;
  padding-top: 150px;
  flex: 1;
`;

const FeaturedProducts = styled.div`
  padding: 20px;
  background-color: #faf7f0;
  text-align: left;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: auto;
  height: 70%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Pagination = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const PageLink = styled.button`
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
`;

const HomePage = () => {
  const { items } = useItems();
  const defaultImage = require('../resources/image/default-image.jpg'); // Path to your default image

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const allProducts = items.length > 0 ? items : new Array(100).fill(0).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: defaultImage,
  }));

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <HomePageWrapper>
      <Navbar />
      <TextImageContainer>
        <TextSection>
          <p style={para}>
            "As Interesting <br />
            as a Plant"
          </p>
        </TextSection>
        <img src={home2} alt="User" />
        <img src={home1} alt="User" />
      </TextImageContainer>
      <FeaturedProducts>
        <h2>Featured Product</h2>
        <ProductsGrid>
          {currentProducts.map(product => (
            <ProductCard key={product.id}>
              <Link to={`/description/${product.id}`}>
                <ProductImage src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </Link>
            </ProductCard>
          ))}
        </ProductsGrid>
        <Pagination>
          <PageLink onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </PageLink>
          <span>{currentPage}</span>
          <PageLink onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </PageLink>
        </Pagination>
      </FeaturedProducts>
    </HomePageWrapper>
  );
};

export default HomePage;
