'use strict';
console.log('---start-myfunction_1----');
// start funktionsausdrücke
// const function kann nicht überschrieben werden
const my_function_1 = function () {
  console.log('myfunction_1');
};
my_function_1();
console.log('---end-myfunction_1----');
console.log('---start-myfunction_2----');
// function kann geändert werden
let my_function_2 = function () {
  console.log('myfunction_2');
};
my_function_2();
console.log('---end-myfunction_2----');
// function wird geändert
console.log('---start-myfunction_2(neu)----');
my_function_2 = function () {
  console.log('myfunction_2(neu)');
};
my_function_2();
console.log('---end-myfunction_2(neu)----');
// end funktionsausdrücke
// start funktionsdeklarationen (werden gehoistet, überall Aufruf möglich)
console.log('---start-myfunction_3----');
function my_function_3() {
  console.log('myfunction_3');
}
my_function_3();
console.log('---stop-myfunction_3----');
// stop funktionsdeklarationen
