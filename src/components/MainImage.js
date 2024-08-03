import React from 'react';
import styled from 'styled-components';

const MainImageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 60px; /* Account for the fixed navbar */
  img {
    width: 100%;
    transition: transform 0.3s, opacity 0.3s;
  }
`;

const MainImage = ({ src, scrollPosition }) => {
  const transformScale = scrollPosition > 100 ? 0.5 : 1;
  const opacity = scrollPosition > 200 ? 0 : 1;

  return (
    <MainImageWrapper>
      <img
        src={src}
        alt="Main"
        style={{
          transform: `scale(${transformScale})`,
          opacity: opacity,
        }}
      />
    </MainImageWrapper>
  );
};

export default MainImage;
