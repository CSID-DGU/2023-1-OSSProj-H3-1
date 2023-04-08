import styled from 'styled-components';
import { theme } from '../../theme';

export const SelectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 3px solid ${theme.primaryColor};
  border-radius: 50px;
`;

export const ImageSection = styled.img`
  width: 100%;
`;

export const LogoButton = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  vertical-align: middle;
  font-size: 14px;
  overflow-y: hidden;
  color: #603900;
  font-weight: 500;
`;

export const BoothNav = styled.div`
  display: inline-flex;
  width: 250px;
  border-radius: 30px;
  border: 2px solid #ffe074;
`;

export const BoothTapBox = styled.button`
  width: 119px;
  margin: 2.5px 3px;
  height: 30px;
  line-height: 30px;
  border: none;
  border-radius: 20px;
  color: #603900;

  &:hover {
    background-color: #ffffff;
  }
`;

export const BoothTimeTableBox = styled.div`
  width: 80%;
  margin: 0 10%;
  background-color: #transparent;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const BoothDay = styled.div`
  justify-content: center;
  display: inline-flex;
  width: 100%;
  margin: 20px 0;
`;

export const BoothThu = styled.button`
  width: 66px;
  height: 66px;
  line-height: 20px;
  padding: 13px 3px;
  background-color: #fff8df;
  border-radius: 50%;
  color: #feb700;
  border: none;
  fontweight: 500;
`;

export const BoothFri = styled.button`
  width: 66px;
  height: 66px;
  line-height: 20px;
  padding: 13px 3px;
  // background-color: #FFF8DF;
  border-radius: 50%;
  color: #603900;
  border: none;
  background-color: transparent;
  fontweight: 500;
`;

export const BoothPerfoBox = styled.div`
  width: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoothScroll = styled.div`
  overflow-y: scroll;
  height: 430px;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    background: #f4f0ec;
  }
  &::-webkit-scrollbar-thumb {
    background: #603900;
    border-radius: 5px;
  }
`;

export const BoothPerfoDetailBox = styled.div`
  width: 300px;
  height: 55px;
  line-height: 55px;
  justify-content: center;
  margin-bottom: 13px;
  display: flex;
  cursor: pointer;
`;

export const BoothPerforNo = styled.div`
  width: 25px;
  height: 25px;
  line-height: 25px;
  background-color: #ffdfdf;
  border-radius: 50%;
  color: #ffffff;
  margin: 15px 15px 15px 0;
  fontweight: 500;
  text-align: center;
`;

export const BoothPerfoName = styled.div`
  width: 190px;
  height: 55px;
  border-radius: 50px;
  border: 1px solid #ffdfdf;
  display: inline-flex;
  background-color: #fffefe;
`;

export const BoothPerfoLogo = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  background-color: #f3f3f3;
  margin: 10px;
  border-radius: 50%;
`;

export const BoothPerfoText = styled.div`
  width: 135px;
  height: 55px;
  display: flex;
  flex-wrap: wrap;
  fontweight: 500;
`;

export const BoothTime = styled.div`
  height: 20px;
  line-height: 30px;
  width: 135px;
  font-size: 10px;
  text-align: left;
  color: #aa9887;
  fontweight: 500;
`;

export const BoothName = styled.div`
  height: 20px;
  line-height: 15px;
  width: 135px;
  font-size: 12px;
  text-align: left;
  color: #603900;
  fontweight: 500;
`;
