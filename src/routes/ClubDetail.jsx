import { dbService, storageService } from '../fbase';
import { ref, uploadString, getDownloadURL } from '@firebase/storage';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'firebase/firestore';
import {
  doc,
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
} from 'firebase/firestore';
import { v4 } from 'uuid';

import React, { useState, useEffect } from 'react';
import { DeatailWrap } from '../components/Introduction/styles';
import { BoothMainImage } from '../components/Introduction/styles';
import ClubPage from '../components/Introduction/ClubPage';

import { useNavigate, useLocation, useParams } from 'react-router-dom';
import MainButton from '../components/Main/MainButton';
import { Box } from '@mui/material';
import { LogoButton } from '../components/Booth/BoothStyled';

import Navigation from '../components/Nav/Nav';

const ClubPageWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
`;

const ClubImage = styled.img`
  margin: 0 auto;
  max-width: 30%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 20px;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const ClubTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #513102;
`;

const ClubDescription = styled.div`
  white-space: pre-wrap;
`;

const ClubHastag = styled.p`
  font-size: 1em;
  color: #ff9b9b;
`;

const ClubHeader = styled.div``;
const Logo = styled.img`
  width: 7%;
  border-radius: 50%;
  margin-right: 15px;
  @media (max-width: 1200px) {
    width: 20%;
  }
`;
const ClubLocation = styled.div`
  margin-top: 30px;
  color: #aa9887;
  font-size: 12px;
`;

const Location = styled.p`
  margin: 10px;
`;

const DetailDesTitle = styled.div`
  margin-top: 20px;
  font-size: 13px;
  text-align: left;
  color: #603900;
  border: 1px solid #f4eee4;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px 15px;
`;
const DetailDesBody = styled.p`
  margin: 13px;
  color: #714709;
  font-size: 12px;
  line-height: 130%;
`;

const DesWrapper = styled.div`
  margin: 0px 100px;
  @media (max-width: 1200px) {
    margin: 0px;
  }
`;

const ClubDetail = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const [nweets, setNweets] = useState([]);

  // 현재 부스 이름 가져오기
  const location = useLocation();
  const decodedUrl = decodeURI(location.pathname);
  var boothName = decodedUrl.substring(7);

  useEffect(() => {
    const q = query(collection(dbService, 'booth'));

    onSnapshot(q, (snapshot) => {
      const clubData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(clubData);
    });
  }, []);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      const q = query(
        collection(dbService, 'booth'),
        where('title', '==', boothName)
      );
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocuments(docs);
    }
    fetchDocuments();
  }, []);

  return (
    <>
      <DeatailWrap>
        <div>
          {documents.map((club) => (
            <div key={club.id}>
              <ClubPageWrapper>
                {/* 동아리 단체사진 */}
                <ClubImage src={club.attachmentUrl} alt="Club Image" />
                <DesWrapper>
                  <ClubHeader>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Logo src={club.attachmentUrl2} />
                      <div>
                        <ClubTitle>{club.title}</ClubTitle>
                        <ClubHastag>{club.hashtag}</ClubHastag>
                      </div>
                    </div>
                    <ClubLocation>
                      <Location>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> 동아리방 위치
                        : {club.roomLocation}
                      </Location>
                      <Location>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> 동아리박람회
                        위치 : {club.boothLocation}
                      </Location>
                    </ClubLocation>
                  </ClubHeader>

                  <ClubDescription>
                    <DetailDesTitle>소개글</DetailDesTitle>
                    <DetailDesBody>{club.introduce}</DetailDesBody>

                    <DetailDesTitle>활동안내</DetailDesTitle>
                    <DetailDesBody>{club.activity}</DetailDesBody>

                    <DetailDesTitle>모집 안내</DetailDesTitle>
                    <DetailDesBody>{club.recruit}</DetailDesBody>

                    <DetailDesTitle>동아리 부스 안내</DetailDesTitle>
                    <DetailDesBody>{club.boothNotice}</DetailDesBody>

                    <DetailDesTitle>인스타그램 및 문의</DetailDesTitle>
                    <DetailDesBody>
                      <FontAwesomeIcon icon={faPhone} /> : {club.inquiry1}
                    </DetailDesBody>
                    <DetailDesBody>
                      <FontAwesomeIcon icon={faInstagram} /> :
                      {" "}
                      <a href={`https://www.instagram.com/${club.inquiry2.substring(1)}`} target="_blank">
                        {club.inquiry2}
                      </a>
                    </DetailDesBody>
                  </ClubDescription>
                </DesWrapper>
                {/* Add more components here for additional information */}
              </ClubPageWrapper>
            </div>
          ))}
        </div>
      </DeatailWrap>
    </>
  );
};

export default ClubDetail;
