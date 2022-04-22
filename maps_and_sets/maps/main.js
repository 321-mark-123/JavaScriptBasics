'use strict';
let my_map = new Map();
console.log(my_map);
/**my_map.set
 * key, value
 */
my_map.set('test', 'value test'); // 0: {"test" => "value test"}
my_map.set(69, 'value 69'); //1: {69 => "value 69"}
my_map.set([], 'value []'); //2: {Array(0) => "value []"}
my_map.set(function () {}, 'value function'); //3: {function () {} => "value function"}
my_map.set({}, 'value {}'); //4: {Object => "value {}"}
console.log(my_map);
/*
Map(5) {'test' => 'value test', 69 => 'value 69', Array(0) => 'value []', ƒ => 'value function', {…} => 'value {}'}
*/
console.log(my_map.get('test'));
console.log(my_map.get(69));
console.log(my_map.get('[]')); // it isnt the same -> undefined
console.log(my_map.get('function()')); // it isnt the same -> undefined
console.log(my_map.get('{}')); // it isnt the same -> undefined

console.log(my_map.has('test')); //-> true
console.log(my_map.has('70')); //-> false
console.log(my_map.has('[]')); // -> false
console.log(my_map.has('function()')); // -> false

my_map.delete('test');
console.log(my_map.size); // 4

// my_map.clear(); // alles löschen
