'use strict';
let random_num = Math.random();
console.log(`Math.random: ${random_num} Zahl zwischen 0 u 1 `);
let random_num_12 = Math.floor(Math.random() * (12 + 1));
console.log(`Math.random * 12 +1 : ${random_num_12} (Zahl zwischen 0 u 12) `);

//zufällige Zahl zwischen 40 und 60
let min = 40;
let max = 60;
let random_num_40 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Math.random * 20 +1 : ${random_num_40} (Zahl zwischen 40 u 60) `);

const zufallszahl = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(`function Zufallszahl min: 40 max: 60: = ${zufallszahl(min, max)}`);

// probleme mit Kommazahlen (binärsystem hat ein kleines problem)
console.log(14.23 + 354.97); //369.20000000000005
console.log(9332654729891549); //9332654729891548

// "euro" rechnen
console.log(((14.23 * 100 + 354.97 * 100) / 100).toFixed(2)); //369.20000000000005 ungehen 2 nachkiommastellen Achtung string
console.log((14.23 * 100 + 354.97 * 100) / 100); //369.20000000000005 ungehen 2 nachkiommastellen
