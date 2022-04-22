'use strict';
let my_set = new Set();
console.log(my_set);
/**.Set speichern nur einzigartige Werte
 * add -> hinzuegen
 * has
 * delete
 * clear
 * size
 */
my_set.add('test');
my_set.add(13);
my_set.add([]);
my_set.add({});
my_set.add(13); //wird nicht hinzugefügt
my_set.add([]); //  wird hinzugefügt da [] !== []
my_set.add(function () {});
console.log(my_set);
console.log(my_set.has('test')); //true
console.log(my_set.has(7 + 6)); //true 7+6 = 13
//....

my_set.delete('test');
console.log(my_set.size); //true 7+6 = 13

//my_set.clear; // allles loeschen
