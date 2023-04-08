import Nweet from '../components/Nweet';
import { dbService, storageService } from '../fbase';
import { ref, uploadString, getDownloadURL } from '@firebase/storage';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [roomLocation, setRoomLocation] = useState('');
  const [boothLocation, setBoothLocation] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [activity, setActivity] = useState('');
  const [recruit, setRecruit] = useState('');

  // 진행 날짜
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  // 문의 1 : 전화, 2 : 인스타
  const [inquiry1, setInquiry1] = useState('');
  const [inquiry2, setInquiry2] = useState('');

  // 메인 이미지
  const [attachment, setAttachment] = useState('');

  // 로고 이미지
  const [attachment2, setAttachment2] = useState('');

  //category
  const [category, setCategory] = useState('');

  const [boothNotice, setBoothNotice] = useState('');
  // realtime 트윗 적용하기
  useEffect(() => {
    const q = query(collection(dbService, 'booth'));
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  // 제출시
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = '';
    let attachmentUrl2 = '';

    //이미지 첨부하지 않고 텍스트만 올리고 싶을 때도 있기 때문에 attachment가 있을때만 아래 코드 실행
    //이미지 첨부하지 않은 경우엔 attachmentUrl=""이 된다.
    if (attachment !== '') {
      //파일 경로 참조 만들기
      const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
      //storage 참조 경로로 파일 업로드 하기
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachmentUrl 변수에 넣어서 업데이트
      attachmentUrl = await getDownloadURL(response.ref);
    }
    if (attachment2 !== '') {
      //파일 경로 참조 만들기
      const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
      //storage 참조 경로로 파일 업로드 하기
      const response = await uploadString(
        attachmentRef,
        attachment2,
        'data_url'
      );
      //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachmentUrl 변수에 넣어서 업데이트
      attachmentUrl2 = await getDownloadURL(response.ref);
    }

    //booth 오브젝트
    const nweetObj = {
      // main_image: main_image,
      // logo: logo,
      category: category,
      title: title,
      hashtag: hashtag,
      roomLocation: roomLocation,
      boothLocation: boothLocation,
      introduce: introduce,
      activity: activity,
      recruit: recruit,
      boothNotice: boothNotice,
      date1: date1,
      date2: date2,
      inquiry1: inquiry1,
      inquiry2: inquiry2,
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      // 1:메인 이미지
      attachmentUrl,
      // 로고이미지
      attachmentUrl2,
    };

    //트윗하기 누르면 nweetObj 형태로 새로운 document 생성하여 nweets 콜렉션에 넣기
    await addDoc(collection(dbService, 'booth'), nweetObj);

    //state 비워서 form 비우기
    setNweet('');
    //파일 미리보기 img src 비워주기
    setAttachment('');
    setTitle('');
    setHashtag('');
    setRoomLocation('');
    setBoothLocation('');
    setIntroduce('');
    setActivity('');
    setRecruit('');
    // 진행 날짜
    setDate1('');
    setDate2('');
    // 문의 1 : 전화, 2 : 인스타
    setInquiry1('');
    setInquiry2('');
    // 메인 이미지
    setAttachment('');
    // 로고 이미지
    setAttachment2('');
    //category
    setCategory('');

    setBoothNotice('');
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onChangeBoothNotice = (event) => {
    const {
      target: { value },
    } = event;
    setBoothNotice(value);
  };

  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };
  const onChangeHastag = (event) => {
    const {
      target: { value },
    } = event;
    setHashtag(value);
  };

  const onChangeActivity = (event) => {
    const {
      target: { value },
    } = event;
    setActivity(value);
  };

  const onChangeRoomLocation = (event) => {
    const {
      target: { value },
    } = event;
    setRoomLocation(value);
  };
  const onChangeBoothLocation = (event) => {
    const {
      target: { value },
    } = event;
    setBoothLocation(value);
  };

  const onChangeIntroduce = (event) => {
    const {
      target: { value },
    } = event;
    setIntroduce(value);
  };
  const onChangeRecruit = (event) => {
    const {
      target: { value },
    } = event;
    setRecruit(value);
  };

  const onChangeInquiry1 = (event) => {
    const {
      target: { value },
    } = event;
    setInquiry1(value);
  };
  const onChangeInquiry2 = (event) => {
    const {
      target: { value },
    } = event;
    setInquiry2(value);
  };

  const onChangeDate2 = (event) => {
    const {
      target: { value },
    } = event;
    setDate2(value);
  };

  const onChangeDate1 = (event) => {
    const {
      target: { value },
    } = event;
    setDate1(value);
  };

  const onChangeCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    // file 경로
    const theFile = files[0];
    //  파일 미리보기
    const reader = new FileReader();
    // 파일위치를 URL로 반환해준다
    // 이를 img element로 보여주면된다!
    // 시점까지 함께 관리해줘야 URL을 얻을 수 있다./
    // "웹 브라우저 파일을 인식 하는 시점", "웹 브라우저 팦일 인식이 끝난 시점"
    // reader.readAsDataURL(theFile);
    //상태관리
    reader.onloadend = (finshedEvent) => {
      // currentTarget - result에 url이 저장되어 있음
      // console.log(finshedEvent);
      const {
        currentTarget: { result },
      } = finshedEvent;
      setAttachment(result);
    };
    // 생명주기
    reader.readAsDataURL(theFile);
  };

  const onFileChange2 = (event) => {
    const {
      target: { files },
    } = event;
    // file 경로
    const theFile = files[0];
    //  파일 미리보기
    const reader = new FileReader();
    // 파일위치를 URL로 반환해준다
    // 이를 img element로 보여주면된다!
    // 시점까지 함께 관리해줘야 URL을 얻을 수 있다./
    // "웹 브라우저 파일을 인식 하는 시점", "웹 브라우저 팦일 인식이 끝난 시점"
    // reader.readAsDataURL(theFile);
    //상태관리
    reader.onloadend = (finshedEvent) => {
      // currentTarget - result에 url이 저장되어 있음
      // console.log(finshedEvent);
      const {
        currentTarget: { result },
      } = finshedEvent;
      setAttachment2(result);
    };
    // 생명주기
    reader.readAsDataURL(theFile);
  };

  // 파일선택 취소 버튼, 첨부파일을 ""로 해줌
  const onClearAttachment = () => setAttachment('');
  const onClearAttachment2 = () => setAttachment2('');

  return (
    <div style={{ margin: '100px' }}>
      <form onSubmit={onSubmit}>
        {/* 타이틀 */}
        <input
          required
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="Title"
        />

        {/* HashTag */}
        <input
          required
          value={hashtag}
          onChange={onChangeHastag}
          type="text"
          placeholder="HasTag"
        />

        {/* roomloacation */}
        <input
          required
          value={roomLocation}
          onChange={onChangeRoomLocation}
          type="text"
          placeholder="동아리방 위치"
        />

        {/* 부스위치 */}
        <input
          required
          value={boothLocation}
          onChange={onChangeBoothLocation}
          type="text"
          placeholder="부스 위치"
        />

        {/* intro */}
        <textarea
          value={introduce}
          onChange={onChangeIntroduce}
          type="text"
          placeholder="동아리 소개"
        />

        {/* activity */}
        <textarea
          value={activity}
          onChange={onChangeActivity}
          type="text"
          placeholder="활동소개"
        />

        {/* 모집 */}
        <textarea
          value={recruit}
          onChange={onChangeRecruit}
          type="text"
          placeholder="모집안내"
        />

        {/* boothNotice */}
        <textarea
          value={boothNotice}
          onChange={onChangeBoothNotice}
          type="text"
          placeholder="부스 안내"
        />
        {/* 카테고리 */}
        <input
          required
          value={category}
          onChange={onChangeCategory}
          type="text"
          placeholder="카테고리"
        />
        {/* date1 */}
        <input
          required
          value={date1}
          onChange={onChangeDate1}
          type="text"
          placeholder="date1"
        />
        {/* date2 */}
        <input
          required
          value={date2}
          onChange={onChangeDate2}
          type="text"
          placeholder="date2"
        />
        {/* inquiry1 */}
        <input
          required
          value={inquiry1}
          onChange={onChangeInquiry1}
          type="text"
          placeholder="inquiry1"
        />
        {/* inquiry2 */}
        <input
          required
          value={inquiry2}
          onChange={onChangeInquiry2}
          type="text"
          placeholder="inquiry2"
        />

        {/* 메인이미지 */}
        <div>
          <h1>메인이미지</h1>
          <input type="file" accept="image/*" onChange={onFileChange} />
        </div>
        {/* 로고 */}
        <div>
          <h1>로고이미지</h1>
          <input type="file" accept="image/*" onChange={onFileChange2} />
        </div>
        <input
          style={{ float: 'right', margin: '100px', padding: '30px' }}
          type="submit"
          value="Ntweet"
        />
      </form>
      <div style={{ margin: '50px' }}>
        {/* 트윗 뿌리기 */}
        {nweets.map((nweet, idx) => (
          <>
            <span>{idx + 1} </span>
            <Nweet
              key={nweet.id}
              nweetObj={nweet}
              isOwner={nweet.creatorId === userObj.uid}
            />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
