import React, { useState } from 'react';
import CategoryFilter from '../components/Introduction/CategoryFilter';
import Navigation from '../components/Nav/Nav';
import styled from 'styled-components';
const CTAButton = styled.button`
  background-color: #ffd98e;
  color: #8d5500;
  border: none;
  border-radius: 50px;
  padding: 16px 100px;
  width: 40%;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 24px;
  left: 50%;
  cursor: pointer;
  transform: translateX(-50%);
  @media (max-width: 1200px) {
    font-size: 12px;
    width: 70%;
    padding: 14px 40px;
  }
`;

const IntrodcutionWrapper = styled.div`
  margin-bottom: 100px;
  @media (max-width: 1200px) {
    margin-bottom: 60px;
  }
`

const Introduction = () => {
  const handleOnClick = () => {
    window.open('https://dgu-club-fair.netlify.app/', '_blank');
  };

  return (
    <IntrodcutionWrapper>
      <CategoryFilter />
      <CTAButton onClick={handleOnClick}>
        동아리 추천 테스트 하러 가기
      </CTAButton>
    </IntrodcutionWrapper>
  );
};

export default Introduction;
