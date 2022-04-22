'use strict';
/**numbers.sort()
 * standart -> array-values convert to string and sort ASCII tabel!!
 * not to use with numbers
 * use with string
 */
let numbers = [1, 20, 2000, 10000000, 50];
let new_sortet = numbers.sort();
console.log('-new_sortet-numbers.sort-string');
console.log(new_sortet);
/**numbers.sort as call back function
 * compare function a sortet to lower position then b
 * a = 1 , b = 20 , return -19  ist kleiner als 0 also a niedriger index als b
 * oder = a ist kleiner b
 * a-b <  0 dann ist a < b (a auf niedrigeren Index als b gesetzt)
 * a-b =  0 dann ist a = b bleibt alles wie es ist
 * a-b > 0 dann ist a > b (a auf höheren Index als b gesetzt)
 *
 *sortierung von klein nach groß
 */
let numbers1 = [1, 20, 2000, 10000000, 50];
let numbers_new = numbers1.sort(function (a, b) {
  return a - b;
});
console.log('-numbers_new-numbers.sort_a-b');
console.log(numbers_new);
/**numbers.sort as call back function
 * compare function
 * 20-1 = 19 größer 0 a wird sortiert nach höher
 *sortierung von groß nach klein
 */
let numbers2 = [1, 20, 2000, 10000000, 50];
let numbers_new_2 = numbers2.sort(function (a, b) {
  return b - a;
});
console.log('-numbers_new-numbers_2.sort_b-a');
console.log(numbers_new_2);
