import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// 한길 파이어베이스
const firebaseConfig = {
  apiKey: 'AIzaSyCLPofpBtjw04rw3XCq_89YqScudF-D8k4',
  authDomain: 'ossph3.firebaseapp.com',
  projectId: 'ossph3',
  storageBucket: 'ossph3.appspot.com',
  messagingSenderId: '986849163904',
  appId: '1:986849163904:web:20c49e95a8f35f3dbc0465',
  measurementId: 'G-TLJE7G5VZR',
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

// 파이어베이스 초기화
// 참조 필요없으니 export 안함
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

// 로그인은 참조 할것이니 export 진행
export const authService = firebase.auth();

export const dbService = getFirestore();

// storage 공유
export const storageService = getStorage();
