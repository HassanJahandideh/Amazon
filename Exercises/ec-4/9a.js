const text = document.querySelector('.name');
const submit = document.querySelector('.sbm');
const txt = document.querySelector('.txt');

const val = text.value;

submit.addEventListener('click', () => {
   const val = text.value;
   txt.innerHTML = `your name is ${val}`;
});