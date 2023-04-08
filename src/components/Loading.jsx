import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/spinner.gif'

const LoadingText = styled.div`
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #FCFAF7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading = ()=>{

    return(
        <Background>
        <img src={Spinner} alt="로딩중" width="10%" />
        </Background>
      
    )
}

export default Loading;