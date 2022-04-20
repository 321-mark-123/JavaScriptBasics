'use strict';
let produkt = 'Brot';
switch (produkt) {
  case 'Milch':
  case 'Apfel':
    console.log('0.79Eur');
    break;
  case 'Schokolade':
  case 'Chips':
    console.log('0.99Eur');
    break;
  case 'Brot':
    console.log('1.89Eur');
    break;
  default:
    console.log('Produkt nicht da , sorry !');
    break;
}
