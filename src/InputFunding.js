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
            <div id="funding_sub">
                내가 너에게 전달할 마음은?
            </div>
            <div id="present_box">
                <img src={open_box} id="open_present_box"/>
                <img src={present} id="present_inside"/>
            </div>
        </div>
        <div class="user_input2">
            <div id="username">
                <b>닉네임</b>
            </div>
            <div id="input_name">
                <input type="text" placeholder="닉네임을 입력하세요."/>
            </div>
            <div id="price">
                <b>금액[최대 10만원]</b>
            </div>
            <div id="input_price">
                <input type="text" placeholder="가상의 금액으로 마음을 표현해보세요."/>
            </div>
            <div id="letter">
                <b>편지[선택]</b>
            </div>
            <div id="input_letter">
                <input type="text" placeholder="100자 이내로 작성하세요."/>
            </div>
        </div>
        <div className="page_move">
            <button id="back">이전</button>
            <button id="next">펀딩하기 완료!</button>
        </div>
    </div>
  );
}
export default Sharefund;