const createLetterBtn = document.querySelector('#criar-carta');
const letterInput = document.querySelector('#carta-texto');
const letter = document.querySelector('#carta-gerada');

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function addClass(elem) {
  elem.classList.add(styleGroup[Math.floor(Math.random() * 3)]);
  elem.classList.add(sizeGroup[Math.floor(Math.random() * 3)]);
  elem.classList.add(rotationGroup[Math.floor(Math.random() * 2)]);
  elem.classList.add(inclinationGroup[Math.floor(Math.random() * 2)]);
}

function countWords(c) {
  const counter = document.querySelector('#carta-contador');
  counter.innerHTML = c;
}

function generateLetter() {
  letter.innerHTML = '';
  if (letterInput.value.length !== 0 && letterInput.value.replace(' ', '').length !== 0) {
    const words = letterInput.value.split(' ');
    countWords(words.length);
    for (let i = 0; i < words.length; i += 1) {
      const word = document.createElement('span');
      addClass(word);
      word.innerHTML = words[i];
      letter.appendChild(word);
    }
  } else {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

createLetterBtn.addEventListener('click', generateLetter);
