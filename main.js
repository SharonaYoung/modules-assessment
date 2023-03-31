const switched = document.querySelector("#switch");
const change = document.querySelector("#change");
const offOn = () => {
  off.classList.toggle('on');
  on.classList.toggle('off');
}

switched.addEventListener('click', offOn);
