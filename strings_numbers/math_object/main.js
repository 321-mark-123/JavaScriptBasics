'use strict';
console.log(Math);
//kreisfläche berechnen radius a=PI * r^2
let a = Math.PI * Math.pow(12, 2); //pow(12,2) ->12^2
console.log(`kreisfläche ${a}`);
let a_gerundet = Math.round(a);
console.log(`gerundet: ${a_gerundet}`);
let a_abgerundet = Math.floor(a);
console.log(`abgerundet: ${a_abgerundet}`);
let a_aufgerundet = Math.ceil(a);
console.log(`aufgerundet: ${a_aufgerundet}`);
let a_nachkommastellen = a.toFixed(3); // return leider string
console.log(`nachkommastellen: ${a_nachkommastellen}`);
//string in zahlen umwandeln
let a_integer = parseInt(a_nachkommastellen);
console.log(`a_integer: ${a_integer}`);
let a_float = parseFloat(a_nachkommastellen); // 3 stellen da schon to fixed durchlaufen
console.log(`a_float: ${a_float}`);

/*
Math
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
*/
