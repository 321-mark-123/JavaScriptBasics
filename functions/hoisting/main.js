'use strict';
//konstanen müssen immer direkt deklariert werden
/*
let a;
a = 5;
console.log(a); //5
console.log('-----');
let b;
console.log(b); //undefined
console.log('-----');
b = 10;
console.log(b);
console.log('-----');
c = 15;
console.log(c); // c not defined
console.log('-----');
*/
var a;
a = 5;
console.log(a); //5
console.log('-----');
var b;
console.log(b); //undefined
console.log('-----');
b = 10;
console.log(b); //10
console.log('-----');
c = 15;
console.log(c); // c not defined
console.log('-----');
var c; //15
//"start" Bereich 1
let e = 25;
if (true) {
  //"start" Bereich 1.1

  let e = 35; //"neue lokale variable"
  console.log('--if---');
  console.log(e); //35
  //"stop" Bereich 1.1
}
console.log('--after-if---');
console.log(e); //35
//"stop" Bereich 1
