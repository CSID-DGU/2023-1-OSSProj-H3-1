import { Grid } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoButton } from '../Booth/BoothStyled';
import MainButton from '../Main/MainButton';
import Logo from '../../assets/images/Booth/Logo.png';

const Nav = () => {
  const navigate = useNavigate();
  const pageCurrent = useLocation();

  return (
    <>
      <Grid
        item
        xs={12}
        gap={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <LogoButton
          src={Logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <MainButton
          pageCurrent={pageCurrent.pathname}
          location="/introduction"
          buttonName1="동아리"
          buttonName2="소개"
          onClick={() => navigate('/introduction')}
        ></MainButton>
        <MainButton
          pageCurrent={pageCurrent.pathname}
          location="/booth"
          buttonName1="동아리"
          buttonName2="부스"
          onClick={() => navigate('/booth')}
        ></MainButton>
        <MainButton
          pageCurrent={pageCurrent.pathname}
          location="/about"
          buttonName1="ABOUT"
          onClick={() => navigate('/about')}
        ></MainButton>
      </Grid>
    </>
  );
};

export default Nav;
