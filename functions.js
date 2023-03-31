const switched = document.querySelector("#switch");

const offOn = () => {
  off.classList.toggle('on');
  on.classList.toggle('off');
}

export const toggleBtn = () => {
  switched.addEventListener('click', offOn)
}