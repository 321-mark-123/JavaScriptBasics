'use strict';
// if (Bedingung) {
//     Code der ausgeführt wird wenn Bedingung true ist
// }
/*
if (true) {
  console.log('if wurde ausgeführt');
}
if (false) {
  console.log('if wurde nie ausgeführt');
}
*/
/*
if (10 < 20) {
  console.log('if wurde ausgeführt 10<20');
}
console.log('------------------');
*/
if (10 < 20 && 10 < 30) {
  console.log('if wurde ausgeführt');
}
console.log('------------------');
/*
 *benutzer älter als 18 ?
 *
 */
const min_age = 18;
let user_age = 11;

if (min_age <= user_age) {
  console.log('Du bist Alt genug');
}
