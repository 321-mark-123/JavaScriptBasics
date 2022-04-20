'use strict';

let auto_1 = {
  marke: 'VW',
  modell: 'Käfer',
  farbe: 'Himmelblau',
};
let auto_2 = {
  marke: 'Ford',
  modell: 'Fiesta',
  farbe: 'Pechschwarz',
};
let auto_3 = {
  marke: 'VW',
  modell: 'Golf',
  farbe: 'Froschgrün',
};

let autos = [auto_1, auto_2, auto_3];
console.log(autos);

let autos_1 = [
  { marke: 'VW', modell: 'Käfer', farbe: 'Himmelblau' },
  { marke: 'Ford', modell: 'Fiesta', farbe: 'Pechschwarz' },
  { marke: 'VW', modell: 'Golf', farbe: 'Froschgrün' },
];
console.log(autos_1);
console.log(autos[0], autos[1], autos[2]);
console.log(
  autos[0].marke,
  autos[0].modell,
  autos[0].farbe,
  autos[1].marke,
  autos[1].modell,
  autos[1].farbe,
  autos[2].marke,
  autos[2].modell,
  autos[2].farbe
);
/*
let waren = [
  ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen'],
  ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl'],
  ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot'],
];
*/
let waren = {
  obst: ['Biren', 'Äpfel', 'Pflaumen', 'Kirschen'],
  gemuese: ['Möhren', 'Sellerie', 'Weißkohl', 'Grünkohl'],
  brot: ['Graubrot', 'Weißbrot', 'Knäckebrot', 'Vollkornbrot'],
};
console.log(waren.obst);
console.log(waren.gemuese);
console.log(waren.brot);
console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);
console.log(waren.gemuese[0]);
console.log(waren.gemuese[1]);
console.log(waren.gemuese[2]);
console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);
