function isSameProduct(product1, product2) {
   if (product1.name === product2.name && product2.price === product2.price) {
      return true;
   } else {
      return false;
   }
}

const product1 = {
   name: 'socks',
   price: 1090
};

const product2 = {
   name: 'socks',
   price: 1090
};

console.log(isSameProduct(product1, product2));