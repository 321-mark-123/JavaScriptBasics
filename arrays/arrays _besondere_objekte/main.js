'use strict';
//arrays, können auch verschieden Datentypen enthalten
// besondere form von objecten (length...)
let produkte_array = [
  'Bananen',
  'Äpfel',
  'Schokolade',
  'Brot',
  'Müsli',
  'Milch',
  'Sprudel_gelb',
];
console.log(produkte_array);
console.log('array.length');
console.log(produkte_array.length);
console.log('array.length-1');
console.log(produkte_array.length - 1);
console.log('array_letztes_produkt');
console.log(produkte_array[produkte_array.length - 1]);
/*
Array(7)
0: "Bananen"
1: "Äpfel"
2: "Schokolade"
3: "Brot"
4: "Müsli"
5: "Milch"
6: "Sprudel_gelb"
length: 7
*/
// letztes Elment ist Länge des Arrays -1
console.log('index 0');
console.log(produkte_array[0]); //Bananen
console.log('index 1');
console.log(produkte_array[1]); //Äpfel
console.log('index 2');
console.log(produkte_array[2]); //Schokolade
console.log('index 3');
console.log(produkte_array[3]); //Brot
console.log('index 4');
console.log(produkte_array[4]); //Müsli
console.log('index 5');
console.log(produkte_array[5]); //Milch
console.log('index 6');
console.log(produkte_array[6]); //Sprudel_gelb
console.log('index 7');
console.log(produkte_array[7]); //undefined da nichts mehr im array
/*
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables):
*/
