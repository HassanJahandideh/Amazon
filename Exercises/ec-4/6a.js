const randomNumber = Math.random();
let result;

if (randomNumber < 0.5) {
   result = 'heads';
} else {
   result = 'tails'
}

const guess = 'heads';
if (guess === result) {
   alert('You Win!');
} else {
   alert('You Lose!');
}