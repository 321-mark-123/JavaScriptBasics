'use strict';
console.log('K' == 'k'); // false
console.log('K' > 'k'); // false
console.log('K' < 'k'); // (ASCII) 75 < (ASCII) 107 true
console.log('--------------'); //
gleich;
console.log('Hugo' == 'Hugo'); // true
console.log('Hugo' == 'Hugo Karl'); // false
console.log('Hugo' == 'HUGO'); // H = H   u != U -> false
console.log('--------------'); //
//ungleich
console.log('Hugo' != 'Hugo'); // false
console.log('Hugo' != 'Hugo Karl'); // true
console.log('Hugo' != 'HUGO'); // H = H   u != U -> true
console.log('--------------'); //
//kleiner
console.log('Hugo' < 'Hugo'); // false
console.log('Hugo' < 'Hugo Karl'); // true
console.log('Hugo' < 'HUGO'); // H = H   u > U -> false
//größer
console.log('Hugo' > 'Hugo'); // false
console.log('Hugo' > 'Hugo Karl'); // false
console.log('Hugo' > 'HUGO'); // H = H   u > U -> true
//kleiner gleich
console.log('Hugo' <= 'Hugo'); // true
console.log('Hugo' <= 'Hugo Karl'); // true
console.log('Hugo' <= 'HUGO'); // H = H   u > U -> false
//größer gleich
console.log('Hugo' >= 'Hugo'); // true
console.log('Hugo' >= 'Hugo Karl'); // false
console.log('Hugo' >= 'HUGO'); // H = H   u > U -> true
