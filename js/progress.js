const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function updateProgressText() {
  const progressValue = progressBar.value;
  const progressMax = progressBar.max;

  const percentage = Math.round((progressValue / progressMax) * 100);
  progressText.textContent = `${percentage}%`;
}

progressBar.addEventListener('input', updateProgressText);
updateProgressText(); // 초기값 표시
