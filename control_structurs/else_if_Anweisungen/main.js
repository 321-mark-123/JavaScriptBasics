'use strict';
// if (Bedingung) {
//     Code der ausgeführt wird wenn Bedingung true ist
// }
/*
if (min_age <= user_age) {
  console.log('Du bist Alt genug');
} else {
  console.log('Du bist nicht Alt genug');
}
if (10 < 20 && 10 < 30) {
  console.log('if wurde ausgeführt');
}
console.log('------------------');
if (Bedingung1) {
   Code der ausgeführt wird wenn Bedingung true ist
} else if (Bedingung2) {
   Code der ausgeführt wird wenn Bedingung true ist
} else if (Bedingung3) {
   Code der ausgeführt wird wenn Bedingung true ist
} else {
   Code der ausgeführt wird wenn Bedingung false ist
} 


/*
 *benutzer älter als 18 ?
 *
 */
const min_age = 18;
let user_age = 19;

// if (min_age <= user_age) {
//   console.log('Du bist Alt genug');
// }
console.log('------------------');

if (min_age <= user_age) {
  console.log('Du bist Alt genug');
} else {
  console.log('Du bist nicht Alt genug');
}
console.log('-----if-else--------');
if (user_age > min_age) {
  if (user_age == min_age) {
    console.log('Du bist gerade Alt genug');
  } else {
    console.log('Du bist Alt genug');
  }
} else {
  console.log('Du bist nicht Alt genug');
}
console.log('----else-if------');
if (user_age == min_age) {
  console.log('Du bist gerade Alt genug');
} else if (user_age > min_age) {
  console.log('Du bist Alt genug');
} else {
  console.log('Du bist nicht Alt genug');
}
