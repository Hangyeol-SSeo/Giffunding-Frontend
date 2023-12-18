import logo from './logo.svg';
import img from './img/logo_box.png';
import kakao from './img/kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './OAuth';
// import './login';
import Progressbar from './Progressbar';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Check() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageData = searchParams.get('imageData');
    const [imageUrl, setImageUrl] = useState(''); // 이미지 URL을 관리하는 상태
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
      // 이미지를 선택했을 때 호출되는 함수
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 선택된 파일 정보 가져오기
    const reader = new FileReader(); // FileReader 객체 생성

    reader.onload = () => {
      // 파일을 읽어온 후 이미지 URL을 상태에 저장
      setImageUrl(reader.result);
    };

    // 선택한 파일을 읽어옴
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
        <div className="top_progress_bar">
            <table>
                <tbody>
                    <tr>
                        <td id="p1"></td>
                        <td id="p2"></td>
                        <td id="p4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="edit_title">
            <p id="main_title">내가 그린 내 선물!</p>
            <p id="sub_title">내 선물은 내가 직접 그린다!</p>
        </div>
        <div className="user_input">
            <div id="input_picture">
                {/* <input type="text" id="picture"/> */}
                {/* 이미지를 선택할 수 있는 input 태그 */}
                {imageData && <img src={imageData} alt="Drawing" id="imgbox"/>}

        {/* 이미지를 미리보기할 img 태그 */}
        {imageUrl && <img src={imageUrl} alt="Selected" id='imgbox'/>}
      </div>
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
        </div>
        <div className="bottom_info">
            친구들이 펀딩한 만큼 게이지가 올라가요!<br/>
            누가 누가 <span id="highlight_text">내 선물</span>에 펀딩 했을까요?<br/><br/>
            100% 펀딩 달성 시 누가 얼마나<br/>펀딩했는지 알 수 있어요!
        </div>
            <div className="page_move">
                <Link to="/edit">
                    <button id="back">이전</button>
                </Link>
            </div>
            <Link to="/sharefund">
                <button id="next">다음</button>
            </Link>
            {/* <button id="next">다음</button> */}
    </div>
  );
}
export default Check;