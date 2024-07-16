const cart = document.querySelector('.cart');
const buy = document.querySelector('.buy');

function popUp() {
   cart.addEventListener('click', () => {
   alert('added');
   });
}
function pop() {
   buy.addEventListener('click', () => {
      alert('Purchased');
   });
}
