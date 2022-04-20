'use strict';
let waren = [
  ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen'],
  ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl'],
  ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot'],
];
// aessere arrays
for (let i = 0; i < waren.length; i++) {
  console.log(waren[i]);
}
/*
(4) ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen']
main.js:9 (4) ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl']
main.js:9 (4) ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot']
*/
console.log('--------------');
for (let i = 0; i < waren.length; i++) {
  console.log(`i:${waren[i]}`);
  for (let j = 0; j < waren[i].length; j++) {
    console.log(`j: ${waren[i][j]}`);
  }
}
/*
i:Biren,Äpfel,Pflaumen,Kirschen
main.js:20 j: Biren
main.js:20 j: Äpfel
main.js:20 j: Pflaumen
main.js:20 j: Kirschen
main.js:18 i:Möhren,Sellerie,Weißkohl,Grünkohl
main.js:20 j: Möhren
main.js:20 j: Sellerie
main.js:20 j: Weißkohl
main.js:20 j: Grünkohl
main.js:18 i:Graubrot,Weißbrot,Knäckebrot,Vollkornbrot
main.js:20 j: Graubrot
main.js:20 j: Weißbrot
main.js:20 j: Knäckebrot
main.js:20 j: Vollkornbrot
*/
