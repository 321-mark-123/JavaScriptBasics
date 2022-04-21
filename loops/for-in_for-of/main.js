'use strict';

let my_array = ['Karl', 'Gustav', 'John', 'Mark'];
let my_object = {
  name: 'John',
  first_name: 'Down',
  age: 22,
};

console.log(my_array);
console.log(my_object);
console.log('------');
/** for-in
 *  loop -> propertys
 */
// in array property is the indexnumber
console.log('---for-in-array--');
for (const p in my_array) {
  console.log(p);
}
// in array property is the property
console.log('---for-in-object--');
for (const p in my_object) {
  console.log(p);
}
/** for-of
 *  loop -> iterable objects (array,map,set..)
 * !!! no objects !!!
 */
// in array
console.log('---for-of-array--');
for (const value of my_array) {
  console.log(value);
}
