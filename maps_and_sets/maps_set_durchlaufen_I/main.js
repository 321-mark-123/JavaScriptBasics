'use strict';
let my_set = new Set(); // "my_map erstellen"
let my_map = new Map(); // "my_set erstellen"
// "my_map befüllen"
my_map.set('test', 'value test');
my_map.set(13, 'value 13');
my_map.set([], 'value []');
my_map.set(function () {}, 'value function(){}');
my_map.set({}, 'value{}');
console.log(my_map);
// "my_set befüllen"
my_set.add('test', 'value test');
my_set.add(13, 'value 13');
my_set.add([], 'value []');
my_set.add(function () {}, 'value function(){}');
my_set.add({}, 'value{}');
console.log(my_set);
//my_map.forEach(function(wert, eigenschaft, map) {}

console.log('-for-each-map');
my_map.forEach(function (wert, eigenschaft, map) {
  console.log(wert);
  console.log(eigenschaft);
  //   console.log(map);
});
console.log('-for-each-set');
my_set.forEach(function (wert) {
  console.log(wert);
});

console.log('-for-of-map');
for (let pair of my_map) {
  // array key:, value:
  console.log(pair);
}
console.log('-for-of-array-map');
for (let [eigenschaft, wert] of my_map) {
  //array aufsplitten
  console.log(eigenschaft);
  console.log(wert);
}

console.log('-for-of-set');
for (let value of my_set) {
  // array  value
  console.log(value);
}
