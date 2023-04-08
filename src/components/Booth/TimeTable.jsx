import React from 'react';
import {
  BoothName,
  BoothPerfoBox,
  BoothPerfoDetailBox,
  BoothPerfoLogo,
  BoothPerfoName,
  BoothPerforNo,
  BoothPerfoText,
  BoothScroll,
  BoothTime,
  BoothTimeTableBox,
  ImageSection,
} from '../../components/Booth/BoothStyled';
import { TIME_DATA_FRI, TIME_DATA_THU } from '../Dummy/SampleData';
import LIKELION_DGU_Logo from '../../assets/images/Booth/LIKELION_DGU_Logo.png';

const TimeTable = ({ dateCurrent }) => {
  // Date 관리------------------------------------------------------------
  const today = new Date();
  const date = today.getDate();
  let hour = String(today.getHours()).padStart(2, '0');
  let minute = String(today.getMinutes()).padStart(2, '0');

  if (minute >= 30) {
    minute = '30';
  } else {
    minute = '00';
  }
  let time = hour + ':' + minute;
  return (
    <>
      <BoothTimeTableBox>
        <BoothPerfoBox>
          {dateCurrent ? (
            <BoothScroll>
              {TIME_DATA_THU.map((data) => (
                <BoothPerfoDetailBox
                  key={data.id}
                  style={
                    date === 9 && time === data.starttime
                      ? {
                          height: '70px',
                          lineHeight: '70px',
                        }
                      : {}
                  }
                  className="fadeIn"
                >
                  <BoothPerforNo
                    style={
                      date === 9 && time === data.starttime
                        ? {
                            backgroundColor: '#FF9B9B',
                            marginTop: '22.5px',
                          }
                        : {}
                    }
                  >
                    {data.id}
                  </BoothPerforNo>
                  <BoothPerfoName
                    style={
                      date === 9 && time === data.starttime
                        ? {
                            backgroundColor: '#FFF1F1',
                            width: '210px',
                            height: '70px',
                            lineHeight: '70px',
                          }
                        : {}
                    }
                  >
                    <BoothPerfoLogo
                      style={
                        date === 9 && time === data.starttime
                          ? {
                              backgroundColor: '#FFFFFF',
                              height: '50px',
                              lineHeight: '50px',
                              width: '50px',
                            }
                          : {}
                      }
                    >
                      <ImageSection src={data.logo} alt="clublogo" />
                    </BoothPerfoLogo>
                    <BoothPerfoText>
                      <BoothTime
                        style={
                          date === 9 && time === data.starttime
                            ? {
                                paddingTop: '8px',
                                fontSize: '13px',
                                color: '#FB6B6B',
                              }
                            : {}
                        }
                      >
                        {data.starttime} ~ {data.endtime}
                      </BoothTime>
                      <BoothName
                        style={
                          date === 9 && time === data.starttime
                            ? {
                                paddingTop: '8px',
                                fontSize: '15px',
                                color: '#000',
                              }
                            : {}
                        }
                      >
                        {data.club}
                      </BoothName>
                    </BoothPerfoText>
                  </BoothPerfoName>
                </BoothPerfoDetailBox>
              ))}
            </BoothScroll>
          ) : (
            <BoothScroll>
              {TIME_DATA_FRI.map((data) => {
                return (
                  <BoothPerfoDetailBox
                    key={data.id}
                    style={
                      date === 10 && time === data.starttime
                        ? {
                            height: '70px',
                            lineHeight: '70px',
                          }
                        : {}
                    }
                    className="fadeIn"
                  >
                    <BoothPerforNo
                      style={
                        date === 10 && time === data.starttime
                          ? {
                              backgroundColor: '#FF9B9B',
                              marginTop: '22.5px',
                            }
                          : {}
                      }
                    >
                      {data.id}
                    </BoothPerforNo>
                    <BoothPerfoName
                      style={
                        date === 10 && time === data.starttime
                          ? {
                              backgroundColor: '#FFF1F1',
                              width: '210px',
                              height: '70px',
                              lineHeight: '70px',
                            }
                          : {}
                      }
                    >
                      <BoothPerfoLogo
                        style={
                          date === 10 && time === data.starttime
                            ? {
                                backgroundColor: '#FFFFFF',
                                height: '50px',
                                lineHeight: '50px',
                                width: '50px',
                              }
                            : {}
                        }
                      >
                        <ImageSection src={data.logo} alt="clublogo" />
                      </BoothPerfoLogo>
                      <BoothPerfoText>
                        <BoothTime
                          style={
                            date === 10 && time === data.starttime
                              ? {
                                  paddingTop: '8px',
                                  fontSize: '13px',
                                  color: '#FB6B6B',
                                }
                              : {}
                          }
                        >
                          {data.starttime} ~ {data.endtime}
                        </BoothTime>
                        <BoothName
                          style={
                            date === 10 && time === data.starttime
                              ? {
                                  paddingTop: '8px',
                                  fontSize: '15px',
                                  color: '#000000',
                                }
                              : {}
                          }
                        >
                          {data.club}
                        </BoothName>
                      </BoothPerfoText>
                    </BoothPerfoName>
                  </BoothPerfoDetailBox>
                );
              })}
            </BoothScroll>
          )}
        </BoothPerfoBox>
      </BoothTimeTableBox>
    </>
  );
};

export default TimeTable;
