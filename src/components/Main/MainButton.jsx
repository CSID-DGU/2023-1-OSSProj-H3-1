import styled from 'styled-components';
import React from 'react';
import NavHover from '../../assets/images/Booth/NavHover.png';

const NavButton = styled.button`
  width: 80px;
  height: 50px;
  color: rgb(98, 66, 33);
  font-family: 'insungitCutelivelyjisu';
  font-size: 0.8rem;
  font-weight: 500;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: border-bottom 2s;
`;

const HoverButton = styled.button`
  width: 80px;
  height: 50px;
  color: rgb(98, 66, 33);
  font-family: 'insungitCutelivelyjisu';
  font-size: 0.8rem;
  font-weight: 500;
  background-color: transparent;
  background-image: url(${NavHover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const MainButton = ({
  location,
  pageCurrent,
  onClick,
  buttonName1,
  buttonName2,
}) => {
  return (
    <>
      {location === pageCurrent ? (
        <HoverButton onClick={onClick}>
          {buttonName1}
          <br />
          {buttonName2}
        </HoverButton>
      ) : (
        <NavButton onClick={onClick}>
          {buttonName1}
          <br />
          {buttonName2}
        </NavButton>
      )}
    </>
  );
};

export default MainButton;
