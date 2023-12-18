import logo from './logo.svg';
import menu from './img/menu.png';
import share from './img/share.png';
import camera from './img/camera.png';
import open_box from './img/open_box.png';
import present from './img/present.png';
import kakao from './img/kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './OAuth';
// import './login';
import Progressbar from './Progressbar';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Sharefund() {
    let [inputCount, setInputCount] = useState(0);
    const [price, setPrice] = useState(0);
    const handleChange=(e)=>{
        console.log(e.target.value);
        setPrice(e.target.value);
    }
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
      };
      const onTextareaHandler = (e) => {
        setInputCount(
        e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
      };

  return (
    <div>
        <header>
            <div className="menu">
                <nav>
                    <img src={menu} id="menu_icon"/>
                </nav>
            </div>
        </header>
        <div className="present">
            <div id="user_present_name">
                (닉네임)님의 선물
            </div>
            <div id="present_box">
                <img src={open_box} id="open_present_box"/>
                <img src={present} id="present_inside"/>
            </div>
        </div>
        <div className="status">
            <p id="present_name">선물 이름</p>
            <div id="funding_progress">
                {/* <progress id="progressBar" value="0" max="100"></progress>
                <div id="progressText"></div> */}
                <Progressbar/>
                {/* <script src="C:\workspace\giffunding\js\progress.js"></script> */}
            </div>
            <div id="funding_money">
                0/270,000\
            </div>
            <div id="move_present">
                <button id="page_button">&#60;&#160;&#160;1/3&#160;&#160;&#62;</button>
            </div>
        </div>
        <div className="page_move">
            <button id="share"><img src={share} id="share_icon"/><span id="share_text">내 선물 공유하기</span></button>
            <img src={camera} id="camera_icon"/>
        </div>
    </div>
  );
}
export default Sharefund;