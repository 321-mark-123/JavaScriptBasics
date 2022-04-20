'use strict';
// a=10 default wert für 1.Parameter
// b=10 default wert für 2.Parameter
//wenn kein parameter übergeben wird damm default werte

const multiply = function (a = 10, b = 10) {
  console.log(a * b);
};

let z1 = 2;
let z2 = 4;

multiply(z1);

const greeting = function (first = 'Hugo', second = 'Karl', age = 18) {
  console.log(`Hallo ${first} ${second} du bist ${age} Jahre alt`);
};
let first = 'Karl';
let second = 'Hugo';
let age = '13';

greeting();
console.log('----------');

greeting(first);
console.log('----------');
greeting(first, second);
console.log('----------');
greeting(first, second, age);
console.log('----------');
greeting(undefined, second, age); //1. Paramter default wert nehmen
console.log('----------');
