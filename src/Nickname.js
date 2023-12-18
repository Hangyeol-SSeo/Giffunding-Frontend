import logo from './logo.svg';
import img from './img/logo_box.png';
import kakao from './img/kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './OAuth';
import { createContext } from 'react';
// import './login';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Nickname(props) {
    let [inputCount, setInputCount] = useState(0);
    const [agreement, setAgreement]=useState(false);
    const handleChange=(data) => {
        if(data=="agreement") {
            if(agreement==true) {
                console.log(data, "our value");
            }
            setAgreement(!agreement);
        }
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
        <div className="draw_explain">
            닉네임을 설정해주세요!
        </div>
        <div className="user_input">
            <div id="nickname">
                <b>닉네임</b>
            </div>
            <div id="input_name">
                <form onSubmit={event=>{
                    if(agreement!=true || inputCount == 0) {
                        event.preventDefault();
                    }
                }}>
                
                    <input name="nickname" placeholder="(0/8)" onChange={onInputHandler} maxLength="8"/>
                    <div className="checkbox_form">
                        <input type="checkbox" name="agree" id="a1" value={agreement} onChange={() => handleChange("agreement")} />
                        <label>(필수)이용약관 및 개인정보 수집 동의</label>
                    </div>
                    <div className="page_move">
                        <Link to="/login">
                            <button id="back">이전</button>
                        </Link>
                        <Link to="/edit">
                            <button value="내 선물 만들기" id='next'>내 선물 만들기</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
export default Nickname;