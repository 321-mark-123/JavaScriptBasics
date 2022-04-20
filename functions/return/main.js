'use strict';
// Rückgabewert
const multiply = function (a, b) {
  return a * b;
};

let nmb1 = 12;
let nmb2 = 12;

let result = multiply(nmb1, nmb2); // result ist -> return (Rückgabewert)
console.log('-------------');
console.log(result);
console.log('-------------');
let result2 = multiply(result, result); // result ist -> return (Rückgabewert)
console.log('-------------');
console.log(`result = ${result} * ${result}`);
console.log('-------------');
console.log('-------------');
console.log(`result2 ${result2} `);
console.log('-------------');
console.log(multiply(result, result));
console.log('-------------');
console.log(multiply(result, result));
console.log('-------------');
console.log('-------------');
console.log(multiply(multiply(nmb1, nmb2), multiply(nmb1, nmb2)));
