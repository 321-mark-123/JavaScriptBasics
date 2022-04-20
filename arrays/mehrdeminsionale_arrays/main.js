'use strict';

/*so eigtl. nicht
let obst = ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen'];
let gemuese = ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl'];
let brot = ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot'];
let waren = [obst, gemuese, brot];
console.log(waren);
*/
/*
(3) [Array(4), Array(4), Array(4)]
0: Array(4)
0: "Biren"
1: "Äpfel"
2: "Pflaumen"
3: "Kirschen"
length: 4
[[Prototype]]: Array(0)
1: Array(4)
0: "Möhren"
1: "Sellerie"
2: "Weißkohl"
3: "Grünkohl"
length: 4
[[Prototype]]: Array(0)
2: Array(4)
0: "Graubrot"
1: "Weißbrot"
2: "Knäckebrot"
3: "Vollkornbrot"
length: 4
[[Prototype]]: Array(0)
length: 3
*/
let waren = [
  ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen'],
  ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl'],
  ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot'],
];
console.log(waren);
//obst_array
console.log(waren[0]);
//gemuese_array
console.log(waren[1]);
//brot_array
console.log(waren[2]);
//obst_array
console.log(waren[0][0]); //birnen
console.log(waren[0][1]); //äpfel
console.log(waren[0][2]); //pflaumen
console.log(waren[0][3]); //kirschen

//gemuese_array
console.log(waren[1][0]); //möhren
console.log(waren[1][1]); //sellerie
console.log(waren[1][2]); //weißkohl
console.log(waren[1][3]); //grünkohl

//brot_array
console.log(waren[2][0]); //graubrot
console.log(waren[2][1]); //weißbrot
console.log(waren[2][2]); //knäckebrot
console.log(waren[2][3]); //vollkornbrot
/*
(3) [Array(4), Array(4), Array(4)]
0: Array(4)
0: "Biren"
1: "Äpfel"
2: "Pflaumen"
3: "Kirschen"
length: 4
[[Prototype]]: Array(0)
1: Array(4)
0: "Möhren"
1: "Sellerie"
2: "Weißkohl"
3: "Grünkohl"
length: 4
[[Prototype]]: Array(0)
2: Array(4)
0: "Graubrot"
1: "Weißbrot"
2: "Knäckebrot"
3: "Vollkornbrot"
length: 4
[[Prototype]]: Array(0)
length: 3
[[Prototype]]: Array(0)
*/
