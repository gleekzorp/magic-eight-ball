let yesOrNo = ['YES', 'NO'];
const clickArea = document.querySelector('.inner-circle');
const answer = document.querySelector('.answer');

clickArea.addEventListener('click', () => {
  answer.innerHTML = getYesOrNo()
})

function getYesOrNo() {
  return yesOrNo[Math.floor(Math.random() * yesOrNo.length)]
}