'use strict';
let x = 0; //Zählvariable
while (x < 5) {
  //Bedingung
  x++; //Anweisung für die Zählschleife
  console.log(x); //Code
}
/*
for (Zaehlvariable; Bedingung; Anweisung für Zaehlvariable) {
    Code
}
*/
for (let i = 0; i < 5; i++) {
  console.log('-for-');
  console.log(i);
}
console.log('-after-for-');

/*
for (Zaehlvariable; Bedingung; Anweisung für Zaehlvariable) {
    Code
}
*/
for (let i = 0; i < 5; i++) {
  console.log('-for-');
  if (i == 3) {
    continue;
  } else if (i == 4) {
    break;
  }
  console.log(i);
}
console.log('-after-for-');
