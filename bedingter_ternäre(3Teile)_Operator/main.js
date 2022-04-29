'use strict';
//Bedingung ? Ausdruck_1 : Ausdruck 2 änlcih ifelse
// if (Bedingung) {
//     Ausdruck1

// } else {
//     Ausdruck2
// }
let meine_zahl = 12;
if (meine_zahl > 10) {
  console.log('größer 10');
} else {
  console.log('kleiner oder gleich10');
}
//bedingter ternärer operator
console.log(meine_zahl > 10 ? 'Grö0er als 10' : 'kleiner oder gleich10');

let geschlecht = 1;
console.log(`Hallo ${geschlecht ? 'Frau' : 'Herr'} Mustermann`);
geschlecht = 0;
console.log(`Hallo ${geschlecht ? 'Frau' : 'Herr'} Mustermann`);
let fuehrerschein = true;
const fuehrerschein_kontrolle = function () {
  if (fuehrerschein) {
    return 'darf fahren';
  } else {
    return 'darf nicht fahren';
  }
};
fuehrerschein_kontrolle();
console.log(fuehrerschein_kontrolle());

const fuehrerschein_kontrolle1 = function () {
  return fuehrerschein ? 'darf fahren' : 'darf nicht fahren';
};
console.log(fuehrerschein_kontrolle1());

let erdbeschleunigung = 5.2;
let panik = false;
erdbeschleunigung > 9.81 ? ((panik = true), (erdbeschleunigung = 9.81)) : ((panik = false), (erdbeschleunigung = 9.81));
console.log(erdbeschleunigung);
console.log(panik);

let farbe = 'violett';
if (farbe === 'rot') {
  console.log('ich mag rot');
} else if (farbe === 'blau') {
  console.log('ich mag blau');
} else if (farbe === 'grün') {
  console.log('ich mag grün nicht');
} else {
  console.log(`zur Farbe ${farbe} habe ich keine Meinung`);
}

console.log(
  farbe === 'rot'
    ? 'ich mag rot'
    : farbe === 'blau'
    ? 'ich mag blau'
    : farbe === 'grün'
    ? 'grün nicht'
    : `zur Farbe ${farbe} habe ich keine Meinung`
);
