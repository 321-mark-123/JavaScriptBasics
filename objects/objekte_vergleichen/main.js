'use strict';
let auto_1 = {
  marke: 'BMW',
  modell: 'i8',
};
let auto_2 = {
  marke: 'Tesla',
  modell: 'Model X',
};
let auto_3 = {
  marke: 'Tesla',
  modell: 'Model X',
};
/**  2 objecte sind niemals gleich ausser sie sind das selbe object
 * nur Eigenschaften können verglichen werden
 * */
console.log(auto_1 == auto_2); //false
console.log(auto_2 == auto_3); //false gleich aber nicht das selbe
console.log(auto_3 == auto_3); //true
console.log({} == {}); //false gleich aber nicht das selbe

const autos_vergleichen = function (o1, o2) {
  if (o1.marke == o2.marke && o1.modell == o2.modell) {
    return true;
  } else {
    return false;
  }
};
console.log('--utos_vergleichen--');
console.log(autos_vergleichen(auto_2, auto_3)); //true

console.log(autos_vergleichen(auto_1, auto_3)); //false
