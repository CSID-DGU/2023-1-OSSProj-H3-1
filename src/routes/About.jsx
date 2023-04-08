import React from 'react';
import styled from 'styled-components';
import '../components/About/style.css';
import SiteLogo from '../assets/images/About/SiteLogo.svg';
import DGULogo from '../assets/images/About/RoundDGULogo.svg';
import ButtonToSite from '../assets/images/About/ButtonToSite.svg';
import DonghangLogo from '../assets/images/About/DonghangLogo.svg';
import AllimiLogo from '../assets/images/About/AllimiLogo.svg';
import DonghangInstaLogo from '../assets/images/About/DonghangInstaLogo.svg';
import AllimiInstaLogo from '../assets/images/About/AllimiInstaLogo.svg';
import DGUInstaLogo from '../assets/images/About/DGUInstaLogo.svg';

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

const AboutPage = styled.div`
  padding-top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #aa9887;
`;

const AboutUs = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #603900;
  font-size: 11px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.1em;
`;

const AboutUsText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.1em;
`;

const DGULikeLion = styled.div`
  padding-right: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #000000;
`;

const SubText = styled.p`
  padding: 10px 0 10px 0;
  color: #aa9887;
  font-size: 10px;
`;

const Collaboration = styled.div`
  text-align: center;
  font-size: 15px;
`;

const CollaboImage = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  font-size: 10px;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-bottom: 10vh;
`;

const About = () => {
  const handleOnClick = () => {
    window.open('https://dgu-club-fair.netlify.app/', '_blank');
  };
  return (
    <>
      <Wrapper className="fadeIn">
        <AboutPage>
          <SubText>
            <img src={SiteLogo} alt="" />
            <div style={{ padding: '4px 0 6px 0' }}>
              안녕하세요,{' '}
              <span style={{ color: '#603900' }}>
                동국대학교 멋쟁이사자처럼
              </span>
              입니다.
            </div>
            <div style={{ padding: '0 0 10px 0' }}>
              동아리 박람회를 맞아 학우분들께서 교내 동아리의 정보를
              <br />
              보다 쉽게 살펴볼 수 있는 페이지가 있으면 좋겠다는 바람으로
              <br />
              교내 동아리를 소개하고 동아리 부스의 위치를 확인할 수 있는
              <br />
              웹사이트를 제작하게 되었습니다.
            </div>
            <div>
              3월 9, 10일 이틀간 진행되는 동아리 박람회가
              <br />
              학우 여러분들께 좋은 추억이 되길 바랍니다!
              <br />
              재밌게 즐기세요 :)
            </div>
          </SubText>
        </AboutPage>
        <br></br>
        <br></br>
        <AboutUs>
          <DGULikeLion>
            <div class="DGULike" style={{ marginRight: '35px' }}>
              DONGGUK
              <br />
              LIKELION
              <br />
              <img src={DGULogo} alt="" />
            </div>
          </DGULikeLion>
          <AboutUsText>
            멋쟁이사자처럼은 누구나 자신의
            <br />
            아이디어를 구현할 수 있는
            <br />
            IT 창업동아리입니다.
            <SubText>
              100만 이상 유저가 사용한 크리스마스
              <br />
              '진저호텔' 서비스, 2022 동국대학교
              <br />
              축제 사이트 등 일상과 밀접한 의미
              <br />
              있는 서비스를 다수 배출하고 있습니다.
            </SubText>
            <div class="Link" style={{ marginLeft: '10px' }}>
              <a href="https://likeliondgu.oopy.io/" target="_blank">
                <img src={ButtonToSite} alt="" />
              </a>
            </div>
            <a
              href="https://www.instagram.com/likelion_dongguk/"
              target="_blank"
              style={{ marginLeft: '35px' }}
            >
              <img src={DGUInstaLogo} alt="" />
            </a>
          </AboutUsText>
        </AboutUs>
        <br></br>
        <br></br>
        <br></br>
        <Collaboration style={{ marginBottom: '40px' }}>
          Collaboration
          <br></br>
          <br></br>
          <CollaboImage>
            <img src={DonghangLogo} style={{ marginRight: '10px' }} alt="" />
            <div>
              <br></br>
              <div>동아리 연합회</div>
              <br></br>
              <a
                href="https://www.instagram.com/donghang_dongguk/"
                target="_blank"
              >
                <img src={DonghangInstaLogo} alt="" />
              </a>
            </div>
          </CollaboImage>
          <CollaboImage>
            <div>
              <br></br>
              <br></br>
              <div class="DGUAllimi" style={{ marginRight: '24px' }}>
                <div>동국대 알리미</div>
                <br></br>
                <a href="https://www.instagram.com/dgu_allimi/" target="_blank">
                  <img src={AllimiInstaLogo} alt="" />
                </a>
              </div>
            </div>
            <img src={AllimiLogo} style={{ marginLeft: '10px' }} alt="" />
          </CollaboImage>
        </Collaboration>
      </Wrapper>

      <CTAButton onClick={handleOnClick}>
        동아리 추천 테스트 하러 가기
      </CTAButton>
    </>
  );
};
export default About;
