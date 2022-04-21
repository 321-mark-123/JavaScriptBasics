'use strict';
/**forEach loop
 *
 */
let numbers = [5, 56, 43, 9, 45, 36, 3, 67, 90];
console.log(numbers);
/* for loop test
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
*/
/*
Array(9)
5
56
43
9
45
36
3
67
90
*/
/* long version
let my_function = function (element) {
  console.log(element);
};
numbers.forEach(my_function);
*/
/*
5;
56;
43;
9;
45;
3;
67;
90;
36;
*/
/**forEach
 * interrates through one array
 * needs another function ->what to do
 * forEach put the actual Element to the next function
 * then work with teh element in the function
 */
numbers.forEach(function (e) {
  console.log('-forEach-');
  console.log(e);
});
