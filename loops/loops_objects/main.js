'use strict';
let my_array = ['Karl', 'Gustav', 'John', 'Mark'];
let my_object = {
  name: 'John',
  first_name: 'Down',
  age: 22,
};

/** do not this way
 for (const e in my_object) {
  console.log(my_object[e]);
}
 */
/**object -> array
 *
 */
/**Object.entries long version 
console.log('----');
let pairs = Object.entries(my_object);
console.log('-Objects.entries---');
console.log(pairs);
for (let pair of pairs) {
  console.log('-for-of-pair---');
  console.log(pair);
  for (let e of pair) {
    console.log('-for-of-pair-e--');
    console.log(e);
  }
}
*/
/**Object.entries short version
 */
console.log('----');
console.log('-Objects.entries---');
console.log(Object.entries(my_object));
for (let pair of Object.entries(my_object)) {
  console.log('-for-of-pair---');
  console.log(pair);
  for (let e of pair) {
    console.log('-for-of-pair-e--');
    console.log(e);
  }
}
/*
(3) [Array(2), Array(2), Array(2)]
-for-of-pair---
(2) ['name', 'John']
-for-of-pair-e--
name
-for-of-pair-e--
John
.....
*/
console.log('----');
/**Object.keys long version
let properties = Object.keys(my_object);
console.log('--Object.keys--');
console.log(properties);
console.log(`propertys: ${properties}`);
*/
/*
(3) ['name', 'first_name', 'age']
0: "name"
1: "first_name"
2: "age"
length: 3
*/
/**Object.keys long version
console.log('-property-of-properties-');
for (let p of properties) {
  console.log(p);
}
*/
console.log('-property-of-properties-');
for (let p of Object.keys(my_object)) {
  console.log(p);
}
/**Object.values
 * long version with extra variable
console.log('-Object.values-');
let values = Object.values(my_object);
console.log('-values-');
console.log(values);
*/
/*
Array(3)
0: "John"
1: "Down"
2: 22
length: 3
*/
/**Object.values for of loop
 * long version with extra variable
for (let v of values) {
  console.log('-value-');
  console.log(v);
}
*/
//short version
for (let v of Object.values(my_object)) {
  console.log('-value-');
  console.log(v);
}
/*
-value-
John
-value-
Down
-value-
22
*/
