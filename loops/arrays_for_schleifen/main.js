'use strict';
let personen = ['peter', 'Anna', 'Mark', 'Ben', 'Zoe', 'Ulrike'];

for (let i = 0; i < personen.length; i++) {
  console.log(`Hallo: ${personen[i]}`);
}
/*
Hallo: peter
Hallo: Anna
Hallo: Mark
Hallo: Ben
Hallo: Zoe
Hallo: Ulrike
*/
for (let i = personen.length - 1; i >= 0; i--) {
  console.log(`Cioa: ${personen[i]}`);
}
/*
Hallo: peter
 Hallo: Anna
 Hallo: Mark
 Hallo: Ben
 Hallo: Zoe
 Hallo: Ulrike
 Cioa: Ulrike
 Cioa: Zoe
 Cioa: Ben
 Cioa: Mark
 Cioa: Anna
*/
