//every
const array = [5, 2, 3, 5, 222, 12, 52, 2];
/**every()
 * sind alle weerte keleiner als 100 dann gibt true zurück
 * @param {array element} element
 * @param {array index} index
 * @param {*} array
 * @returns true if the element is kleiner als 100
 *  */
const condition0 = (element, index, array) => {
  return element < 100;
};
console.log(array.every(condition0));

//some
const roles = ['admin', 'moderator'];
/**some()
 * ein werte
 * @param {array element} element
 * @param {array index} index
 * @param {*} array
 * @returns true if the element is 'Admin'
 *  */
const condition1 = (element, index, array) => {
  return element === 'Admin';
};
console.log(roles.some(condition1));

// fill
const arrayfill = [5, 2, 3, 5, 222, 12, 52, 2];
// werte ersetzen
// wert 0 ab index 0 bis index 2
arrayfill.fill(0, 0, 2);
console.log(array.fill);

// flat
//entfernt kloppt ebenen flach ?
const arrayflat = [
  [[5, [1, 2]], 2, 3, 5],
  [222, 12, 52, 2],
];
// import {flattenDeep} from 'lodash' //max tiefe nicht bekannt
console.log(array.flat());

//reduce()
// z.B. alles aufsummieren
const arrayreduce = [5, 2, 3, 5, 222, 12, 52, 2];
const sumUp = (previousValue, currentValue, currentIndex, array) => {
  console.log(previousValue);
  return previousValue + currentValue;
};

console.log(array.reduce(sumUp, 0));

const products = [
  { name: 'produkt1', preis: 11 },
  { name: 'produkt2', preis: 22 },
  { name: 'produkt3', preis: 33 },
  { name: 'produkt4', preis: 44 },
  { name: 'produkt5', preis: 55 },
  { name: 'produkt6', preis: 66 },
];

const sumUp1 = (previousValue, currentValue, currentIndex) => {
  if (currentIndex.value < 50) {
    return previousValue;
  } else {
    return previousValue + currentValue.preis;
  }
};

console.log(products.reduce(sumUp1));
