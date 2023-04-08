import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Booth from './routes/Booth';
import Main from './routes/Main';
import Home from './routes/Home';
import Auth from './routes/Auth';
import ClubDetail from './routes/ClubDetail';
import Introduction from './routes/Introduction';
import { LinkContext } from './context/LinkContext';
import { useState } from 'react';
import Nav from './components/Nav/Nav';

function Router({ isLoggedIn, userObj }) {
  const [idParams, setIdParams] = useState(0);
  return (
    <BrowserRouter>
      <Nav />
      <LinkContext.Provider value={{ idParams, setIdParams }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/booth/:str" element={<ClubDetail />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </LinkContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
