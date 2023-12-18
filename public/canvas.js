const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Canvas 설정
function adjustCanvasSize() {
  canvas.width = window.innerWidth * 0.9;
  canvas.height = 60 * window.innerWidth * 0.9 / 94;
}

adjustCanvasSize();

// Canvas 내 좌표를 가져오는 함수
function getCanvasCoordinates(e) {
  const canvasRect = canvas.getBoundingClientRect(); // 캔버스 위치 및 크기 정보
  const scaleX = canvas.width / canvasRect.width; // X 축 비율
  const scaleY = canvas.height / canvasRect.height; // Y 축 비율

  // 마우스 이벤트일 때
  if (e.type.startsWith('mouse')) {
    return {
      x: (e.clientX - canvasRect.left) * scaleX,
      y: (e.clientY - canvasRect.top) * scaleY
    };
  }
  // 터치 이벤트일 때
  else if (e.type.startsWith('touch')) {
    const touch = e.touches[0];
    return {
      x: (touch.clientX - canvasRect.left) * scaleX,
      y: (touch.clientY - canvasRect.top) * scaleY
    };
  }
  return { x: 0, y: 0 };
}

// 그리기 함수
function draw(e) {
  if (!isDrawing) return;

  const coordinates = getCanvasCoordinates(e);
  const x = coordinates.x;
  const y = coordinates.y;

  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = '#000';
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(x, y);
  context.stroke();
  lastX = x;
  lastY = y;
}

// 마우스 이벤트 핸들러 설정
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const coordinates = getCanvasCoordinates(e);
  lastX = coordinates.x;
  lastY = coordinates.y;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// 터치 이벤트 핸들러 설정
canvas.addEventListener('touchstart', (e) => {
  isDrawing = true;
  const coordinates = getCanvasCoordinates(e);
  lastX = coordinates.x;
  lastY = coordinates.y;
});

// 다음 버튼 클릭 시 그린 그림을 이미지로 저장
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function () {
  const image = canvas.toDataURL('image/png'); // Canvas를 이미지로 변환

  // 이미지 다운로드 설정
  const link = document.createElement('a');
  link.href = image;
  link.download = 'my_drawing.png';
  link.click();
});


canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);

// Canvas 크기 조정
window.addEventListener('resize', adjustCanvasSize);
