'use strict';

// logisches und &&
console.log(1 > 0 && 4 < 6); // true
console.log(1 > 0 && 6 < 4); // false
console.log('---------------------');
// logisches oder ||
console.log(1 > 0 || 4 < 6); // true
console.log(1 > 0 || 6 < 4); // true
console.log('---------------------');
// logisches nicht !
console.log(1 > 0 && 6 < 4); // false
console.log(1 > 0 && !(6 < 4)); // true
console.log(true); // true
console.log(!true); // false
console.log((1 > 0 && 4 < 6) || 10 > 20); // true da li Ausdruck true ist
console.log((1 > 0 && 4 > 6) || 10 < 20); // true da re Ausdruck true ist
console.log((1 < 0 && 10 < 20) || 6 > 4); // true da re Ausdruck true ist
console.log(1 < 0 && (10 < 20 || 6 > 4)); // false da nach Klammer Ausdruck false ist
