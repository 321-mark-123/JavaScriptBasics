'use strict';
let meine_zahlen = [44, 51, 46];

const addieren = function (a, b, c) {
  console.log(a + b + c);
};
addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2]);
// =
addieren(...meine_zahlen);

//für arrays
let kleines_array = ['Äpfel', 'Bananen', 'Kiwis'];
let grosses_array = [kleines_array[0], kleines_array[1], kleines_array[2], 'Orange', 'Weintraube'];
console.log(grosses_array);

let grosses_array1 = [...kleines_array, 'Orange', 'Weintraube'];
console.log(grosses_array1);
let grosses_array2 = [...kleines_array, ...grosses_array1, 'Kartoffel'];
console.log(grosses_array2);

//(Für Object)
let kleines_object = {
  name: 'Objekt',
  groesse: 2,
  object: true,
};
let grosses_object = {
  ...kleines_object,
  betreff: 'spread-syntax',
  datum: new Date(),
};
console.log(grosses_object);
//für instanzen von Objecten
let datumswerte = [2020, 5, 14];
let datum = new Date(datumswerte[0], datumswerte[1], datumswerte[2]);
console.log(datum);
let datum1 = new Date(...datumswerte);
console.log(datum1);
