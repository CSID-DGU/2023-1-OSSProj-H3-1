import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import Router from './Router';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';
import { authService } from './fbase';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
@font-face {
  font-family: 'insungitCutelivelyjisu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// 추가1. 모든 태그에 border-box 적용 (테두리와 안쪽 여백의 크기도 요소의 크기로 고려)
* {
    box-sizing: border-box;
    font-family: 'insungitCutelivelyjisu';

}
// 추가2. 가져온 폰트를 body태그 안에 있으면 다 적용되게 해줌 + theme 적용
body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
}
// 추가3. 링크에 모든 밑줄 삭제
a{
    text-decoration: none;
    color:inherit;  // 색을 부모로부터 상속 받음
}
`;

function App() {
  // 프로그램 초기화 기다리기
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그인 정보 관리 훅스
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {init ? (
          <Router isLoggedIn={isLoggedIn} userObj={userObj} />
        ) : (
          <Loading />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
