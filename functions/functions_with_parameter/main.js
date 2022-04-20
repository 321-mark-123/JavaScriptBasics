'use strict';
/*
const my_function = function (parameter_1, parameter_2, parameter_xy) {
  console.log('function with parameter');
};

my_function(p_1, p_2, p_xy);
*/
const log_the_number = function (a) {
  console.log(a);
};
log_the_number(8);
//parametername ist frei ohne bezug zur Variablen, functions benötigt 2
const greetings = function (first_name, last_name) {
  console.log(`Hallo ${first_name} ${last_name}`);
};

let vorname = 'Hugo';
let nachname = 'karl';

greetings(vorname, nachname);
console.log('-----------------');
/*function with 2 parameters ,
 * Numbers ,
 * 5 console logs,
 *Grundrechenarten +,-,*,/,% ,
 *5 variablen
 */
const math_basic = function (a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
};
let z1 = 22;
let z2 = 44;
let z3 = 88;
let z4 = 100;
let z5 = 2;

math_basic(z1, z2);
math_basic(z5, z4);
math_basic(z3, z2);
math_basic(z1, z5);
math_basic(z2, z1);
console.log('-----------------');
