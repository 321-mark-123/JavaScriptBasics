'use strict';
let d = new Date();
console.log(d);
//d.tolocalString([schema[,optionen]])
console.log('-de_DE-');
let de_DE = d.toLocaleString('de-DE');
let en_US = d.toLocaleString('en-US');
console.log(de_DE);
console.log('-en_US-');
console.log(en_US);

let optionen = {
  year: 'numeric', //numeric, 2 digit
  month: 'long', //numeric, 2 digit, norrow, short, long
  day: 'numeric', //numeric, 2-digit
  weekday: 'long', //norrow, short, long
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
};
let de_DE_2 = d.toLocaleString('de-DE', optionen);
console.log(de_DE_2);
d.toLocaleString;
