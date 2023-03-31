// function 1: display random greeting
const greeting = document.querySelector('#greeting');

export let hellos = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Konnichiwa', 'Guten Tag', 'Asalaam Alaikum', 'Shikamoo', 'Yassas', 'Namaste', 'Shalom', 'Aloha', 'Barev', 'Marhaba', 'Zdravo', 'Moni', 'Hallo', 'Geia'];

export function showGreeting(){ setInterval(() => {
  const randomGreeting = hellos[Math.round(Math.random() * hellos.length)];
  const greet = `
      <h1>${randomGreeting}</h1>
    `
    greeting.innerHTML = greet;
  }, 2000);
}

// Function 2: toggle on off button
const switched = document.querySelector("#switch");

const offOn = () => {
  off.classList.toggle('on');
  on.classList.toggle('off');
}

export const toggleBtn = () => {
  switched.addEventListener('click', offOn)
}

// function 3: show alert box
const inputEl = document.querySelector('input');
const form = document.querySelector('form');

let nameInput;

export const showAlert = () => { 

  form.addEventListener('submit', function(event){
    nameInput = inputEl.value;
    event.preventDefault();
    alert(`Have a great day ${nameInput}!`);
    inputEl.value = ""
  })
}