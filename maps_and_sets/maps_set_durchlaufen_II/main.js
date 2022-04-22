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
/*
console.log('--my_map.entries()--');
console.log(my_map.entries());
console.log('--my_map.values()--');
console.log(my_map.values());
console.log('--my_map.keys()--');
console.log(my_map.keys());
*/

/** über maps iterieren
 * for of loops call back functions
 */
for (let pair of my_map.entries()) {
  console.log('-for-of-pair-map-');
  console.log(pair);
}

for (let [eigenschaft, wert] of my_map.entries()) {
  console.log('-for-of-pair2-my_map-');
  console.log(eigenschaft);
  console.log(wert);
}
for (let eigenschaft of my_map.keys()) {
  console.log('-for-of-keys-my_map-');
  console.log(eigenschaft);
  //console.log(wert);
}
/** über sets iterieren
 * for of loops call back functions
 */
for (let wert of my_map.values()) {
  console.log('-for-of-values-my_map-');
  //   console.log(eigenschaft);
  console.log(wert);
}

for (let value of my_set.values()) {
  console.log('-for-of-value-my_set-');
  console.log(value);
}
