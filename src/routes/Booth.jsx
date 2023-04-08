import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material/';
import { theme } from '../theme';
import styled from 'styled-components';
import { LinkContext } from '../context/LinkContext';
import ClubListComponent from '../components/Booth/ClubListComponent';
import MapCurrent from '../components/Booth/MapCurrent';
import TimeTable from '../components/Booth/TimeTable';
import { SelectSection } from '../components/Booth/BoothStyled';
import { dbService } from '../fbase';
import { collection, onSnapshot, query } from 'firebase/firestore';
// import Cursor from '../assets/images/'

// Props Styled-----------------------------------------------------------
const DateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.dateCurrent ? `${theme.primaryBoldColor}` : 'black'};
  background-color: ${(props) =>
    props.dateCurrent ? `${theme.secondaryColor}` : 'transparent'};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${theme.primaryBoldColor};
  }
`;

const SelectButton = styled.button`
  width: 49%;
  height: 90%;
  background-color: ${(props) =>
    props.toggleCurrent ? theme.secondaryColor : 'transparent'};
  border: none;
  border-radius: 50px;
  font-size: 16px;
  color: ${theme.pointColor};
  cursor: pointer;
  font-family: 'insungitCutelivelyjisu';
  transition: 0.2s;
  &:hover {
    background-color: ${theme.primaryColor};
  }
`;

const Booth = () => {
  // Hooks 관리-----------------------------------------------------------
  const [dateCurrent, setDateCurrent] = useState(true);
  const [toggle, setToggle] = useState(true);
  const { idParams } = useContext(LinkContext);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);

  // 렌더링---------------------------------------------------------------
  useEffect(() => {
    const q = query(collection(dbService, 'booth'));
    onSnapshot(q, (snapshot) => {
      const boothData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData9(boothData.filter((e) => e.boothLocation.includes('9일')));
      setData10(boothData.filter((e) => e.boothLocation.includes('10일')));
    });
  }, []);

  // 데이터 처리----------------------------------------------------------
  const clubList9 = [
    data9?.map((club) => (
      <ClubListComponent key={club.id} id={club.map9} name={club.title} />
    )),
  ];
  const clubList10 = [
    data10?.map((club) => (
      <ClubListComponent key={club.id} id={club.map10} name={club.title} />
    )),
  ];

  return (
    <>
      <Container component="main">
        <Grid
          className="fadeIn"
          container
          sx={{
            fontFamily: 'insungitCutelivelyjisu',
            justifyContent: 'space-around',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DateSection
              dateCurrent={dateCurrent}
              onClick={() => setDateCurrent(true)}
            >
              <Typography
                sx={{
                  fontFamily: 'insungitCutelivelyjisu',
                  textAlign: 'center',
                }}
              >
                Thu
                <br />9
              </Typography>
            </DateSection>
            <DateSection
              dateCurrent={!dateCurrent}
              onClick={() => setDateCurrent(false)}
            >
              <Typography
                sx={{
                  fontFamily: 'insungitCutelivelyjisu',
                  textAlign: 'center',
                }}
              >
                Fri
                <br />
                10
              </Typography>
            </DateSection>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '15vh',
            }}
          >
            <SelectSection>
              <SelectButton
                onClick={() => setToggle(true)}
                toggleCurrent={toggle}
              >
                동아리 부스
              </SelectButton>
              <SelectButton
                onClick={() => setToggle(false)}
                toggleCurrent={!toggle}
              >
                공연 타임테이블
              </SelectButton>
            </SelectSection>
          </Grid>
          {toggle ? (
            <Grid item xs={12} md={6}>
              <MapCurrent idParams={idParams} />
            </Grid>
          ) : (
            ''
          )}
          {toggle ? (
            <Grid
              item
              xs={12}
              md={4.5}
              sx={{
                margin: 4,
                height: '40vh',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '10px',
                  borderRadius: '5px',
                  background: '#f4f0ec',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#603900',
                  borderRadius: '5px',
                },
              }}
            >
              <Grid
                item
                sx={{
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    left: '1%',
                    fontFamily: 'insungitCutelivelyjisu',
                    color: '#AA9887',
                  }}
                >
                  부스번호
                </Typography>
                <Typography
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%)',
                    fontFamily: 'insungitCutelivelyjisu',
                    color: '#AA9887',
                  }}
                >
                  동아리 명
                </Typography>
              </Grid>
              <br />
              <br />
              <Grid
                item
                sx={{
                  position: 'relative',
                  height: '100%',
                  color: `${theme.pointColor}`,
                }}
              >
                {dateCurrent ? [...clubList9] : [...clubList10]}
              </Grid>
            </Grid>
          ) : (
            ''
          )}
          {!toggle ? (
            <Grid item xs={12}>
              <TimeTable dateCurrent={dateCurrent}></TimeTable>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
