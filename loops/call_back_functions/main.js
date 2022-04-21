'use strict';
/*function1 wird an function2 übergeben und aufgerufen*/

/** start functon in function "long" version
 *  
let function_1 = function () {
  console.log('iam f_1()');
};
let function_2 = function(f) {
  console.log('iam f_2());
};
function_2(function_1)
*/
/** Callback functions short version*/
let function_2 = function (f) {
  console.log('---f_2---');
  console.log('iam f_2');
  console.log('---call-f_1---');
  f(); //run function inside function
};
// in function 2 u can run function_1
// function_2(function_1); functionsaufruf( Parameter f = andere function angelegt in der Klammer )
//call function_2 with function in brackets
function_2(function () {
  console.log('---f_*1---');
  console.log('iam f_1()');
});
/*
---f_2---
iam f_2
---call-f_1---
---f_*1---
iam f_1()
*/
