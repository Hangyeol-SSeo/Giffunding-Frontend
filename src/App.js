import logo from './logo.svg';
import './App.css';
import img from './img/logo_box.png';
import kakao from './img/kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './OAuth';
// import './login';
// import Edit from './Edit';
import Nickname from './Nickname';
// import Check from './Check';
// import Sharefund from './Sharefund';
// import InputFunding from './InputFunding';
// import FundingSuccess from './FundingSuccess';
import {useState} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import LandingPage from '.components/views'
// function kakao_login(props){

// }
function Kakao() {
  return (
    <div className="App">
      <div className="main_title">
        <p>내가 그린 "<u>내 선물</u>"</p>
      </div>
      <div className="main_text">
            어떤 선물을 받고 싶나요?<br/>
            그림을 그려 친구들에게 표현해 보아요
      </div>
      <div className="img_layout">
        <img src={img} id="main_img"/><br/>
        {/* <a href="">
          <img src = {kakao} id="login_button"/>
        </a> */}
        <a href={KAKAO_AUTH_URL} onClick={function (event) {
          // event.preventDefault();
          
        }}>
          <img src = {kakao} id="login_button"/>
        </a>
      </div>
      <div className="main_bottom">
        <div id="team_name">기뻔딩</div>
        <div id="insta_name"><svg xmlns="http://www.w3.org/2000/svg" width="6vmin" height="6vmin" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>gif.funding</div>
      </div>
    </div>
  );
}
function Login() {
  return (
    <div className="App">
      <div className="main_title">
        <p>내가 그린 "<u>내 선물</u>"</p>
      </div>
      <div className="main_text">
            어떤 선물을 받고 싶나요?<br/>
            그림을 그려 친구들에게 표현해 보아요
      </div>
      <div className="img_layout">
        <Link to="/nickname">
          <img src={img} id="main_img"/>
        </Link>
        <div id = "main_text">
          선물을 눌러보세요!
        </div>
      </div>
      <div className="main_bottom">
        <div id="team_name">기뻔딩</div>
        <div id="insta_name"><svg xmlns="http://www.w3.org/2000/svg" width="6vmin" height="6vmin" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>gif.funding</div>
      </div>
    </div>
  );
}
function App() {
  // const mode = useState('login');
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App">
          <div className="main_title">
            <p>내가 그린 "<u>내 선물</u>"</p>
          </div>
          <div className="main_text">
                어떤 선물을 받고 싶나요?<br/>
                그림을 그려 친구들에게 표현해 보아요
          </div> */}
            <Route path='/' element={<Kakao />} />
            <Route path='/login' element={<Login />} />
            <Route path='/nickname' element={<Nickname />} />
            {/* <Route path='/edit' element={<Edit />} /> */}
            {/* <Route path='/check' element={<Check />} /> */}
            {/* <Route path='/sharefund' element={<Sharefund />} />
            <Route path='/inputfunding' element={<InputFunding />} />
            <Route path='/fundingsuccess' element={<FundingSuccess />} /> */}
          {/* <div className="main_bottom">
              <div id="team_name">기뻔딩</div>
              <div id="insta_name"><svg xmlns="http://www.w3.org/2000/svg" width="6vmin" height="6vmin" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>gif.funding</div>
          </div>
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
