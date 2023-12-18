import logo from './logo.svg';
import img from './img/logo_box.png';
import kakao from './img/kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './OAuth';
// import './login';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [painting, setPainting] = useState(false);
    const [imageData, setImageData] = useState(null); // 추출한 이미지 데이터를 상태로 관리

    useEffect(() => {
    	const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx);
    }, []);
    const drawFn = e => {
        e.preventDefault();
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // 터치 이벤트를 받아오는 부분입니다.
        const touch = e.touches[0];

        // 캔버스의 실제 크기 가져오기
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        // 캔버스 요소의 크기 및 위치 가져오기
        const canvasRect = canvas.getBoundingClientRect();

        // 마우스 이벤트의 클라이언트 좌표를 캔버스 내부 좌표로 변환
        // const mouseX = (e.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        // const mouseY = (e.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

        // 터치 이벤트를 캔버스 내부 좌표로 변환합니다.
        const touchX = (touch.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        const touchY = (touch.clientY - canvasRect.top) * (canvas.height / canvasRect.height);
        
        // if (painting) {
        //     ctx.lineTo(mouseX, mouseY);
        //     ctx.stroke();
        // } else {
        //     ctx.beginPath();
        //     ctx.moveTo(mouseX, mouseY);
        // }
        if (painting) {
            ctx.lineTo(touchX, touchY);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(touchX, touchY);
          }
        // const canvas = canvasRef.current;
        // const ctx = canvas.getContext('2d');
        // const mouseX = e.nativeEvent.offsetX;
        // const mouseY = e.nativeEvent.offsetY;

        // if (painting) {
        //     ctx.lineTo(mouseX, mouseY);
        //     ctx.stroke();
        // } else {
        //     ctx.beginPath();
        //     ctx.moveTo(mouseX, mouseY);
        // }
    };
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
      const onSaveImage = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL(); // Canvas에서 이미지 데이터 URL 추출
        console.log(dataURL);
        // setImageData(dataURL); // 추출한 이미지 데이터를 상태로 저장
        navigate(`/check?imageData=${encodeURIComponent(dataURL)}`);
      };
    //   console.log(imageData);

  return (
    <div>
        <div className="top_progress_bar">
            <table>
                <tbody>
                    <tr>
                        <td id="p1"></td>
                        <td id="p2"></td>
                        <td id="p3"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="draw_explain">
            선물을 그려주세요!
        </div>
        <div className="user_input">
            <form onSubmit={event=>{
                if(inputCount == 0 || price == 0) {
                    event.preventDefault();
                }
            }}>
            <div id="input_picture">
                {/* <canvas id="myCanvas"></canvas> */}
            <canvas id="myCanvas"
                ref={canvasRef}
                onTouchStart={(e) => {
                    setPainting(true);
                    drawFn(e); // 새로운 터치 시작 시에 그리기를 초기화합니다.
                  }}
                onTouchEnd={() => setPainting(false)}
                onTouchMove={(e) => drawFn(e)}
                onTouchCancel={() => setPainting(false)}
                // onMouseDown={() => setPainting(true)}
                // onMouseUp={() => setPainting(false)}
                // onMouseMove={e => drawFn(e)}
                // onMouseLeave={() => setPainting(false)}
            >
            </canvas>
            </div>
            <div id="present_title">
                <b>선물 이름</b>
            </div>
            <div id="input_name">
                <input type="text" placeholder="(0/8)" onChange={onInputHandler} maxLength="8"/>
            </div>
            <div id="price">
                <b>가격</b>
            </div>
            <div id="input_price">
                <input type="number" placeholder="원" value={price} onChange={(e)=>handleChange(e)}/>
            </div>
            <div id="information">
                <b>펀딩에 참여하는 친구는<br/>
                한 사람당 가상의 돈 10만원이 주어집니다.</b>
            </div>
            <div className="page_move">
                <Link to="/nickname">
                    <button id="back">이전</button>
                </Link>
            </div>
            {/* <Link to="/check"> */}
        <button id="next" onClick={onSaveImage}>다음</button>
        {/* </Link> */}
        </form>
            {/* <button id="next">다음</button> */}
        </div>
        {/* <script src="%PUBLIC_URL%/canvas.js"></script> */}
    </div>
  );
}
export default Edit;