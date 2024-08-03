import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  button {
    margin: 0 5px;
    padding: 5px 10px;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationWrapper>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
