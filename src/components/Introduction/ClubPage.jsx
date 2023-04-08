import React from 'react';
import styled from 'styled-components';
import { storageService } from '../../fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    color:#513102;
`;

const ClubDescription = styled.div`
    white-space: pre-wrap;
`;

const ClubHastag = styled.p`
    font-size: 1em;
    color: #FF9B9B;
    
`

const ClubHeader = styled.div`
    
`
const Logo = styled.img`
    width: 7%;
    border-radius: 50%;
    margin-right:15px;
    @media (max-width: 1200px) {
        width: 20%;
}
`
const ClubLocation = styled.div`
    margin-top: 30px;
    color: #AA9887;
    font-size:12px;
`

const Location = styled.p`
margin: 10px;
    
`

const DetailDesTitle = styled.div`
    margin-top: 20px;
    font-size: 13px;
    text-align: left;
    color:#603900;
    border: 1px solid #F4EEE4;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 8px 15px;
`
const DetailDesBody = styled.p`
    margin: 13px;
    color:#714709;
    font-size: 12px;
    line-height: 130%;
`
const ClubPage = ({club}) => {

    
    return (
    <ClubPageWrapper>
    {/* 동아리 단체사진 */}
    <ClubImage src={club.attachmentUrl} alt="Club Image" loading="lazy"/>


    <ClubHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Logo src={club.attachmentUrl2} alt="Club Logo" loading="lazy"/>
            <div>
                <ClubTitle>{club.title}</ClubTitle>
                <ClubHastag>{club.hashtag}</ClubHastag>
            </div>
        </div>
        <ClubLocation>
            <Location><FontAwesomeIcon icon={faMapMarkerAlt}/> 동아리방 위치 : {club.roomLocation}</Location>
            <Location><FontAwesomeIcon icon={faMapMarkerAlt}/> 동아리박람회 위치 : {club.boothLocation}</Location>
        </ClubLocation>
    </ClubHeader>

    <ClubDescription>
        <DetailDesTitle>소개글</DetailDesTitle>
        <DetailDesBody>{club.introduce}</DetailDesBody>

        <DetailDesTitle>활동안내</DetailDesTitle>
        <DetailDesBody>{club.activity}</DetailDesBody>

        <DetailDesTitle>동아리 부스 안내</DetailDesTitle>
        <DetailDesBody>{club.boothLocation}</DetailDesBody>

        <DetailDesTitle>인스타그램 및 문의</DetailDesTitle>
        <DetailDesBody><FontAwesomeIcon icon={faPhone} /> : {club.inquiry1}</DetailDesBody>
        <DetailDesBody><FontAwesomeIcon icon={faInstagram} /> : {club.inquiry2}</DetailDesBody>

    </ClubDescription>
      {/* Add more components here for additional information */}
    </ClubPageWrapper>
    );
};

export default ClubPage;