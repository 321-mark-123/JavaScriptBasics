'use strict';

let first_name = 'Hugo';
let second_name = 'Fresh';
let age = 33;

let name = first_name + ' ' + second_name;
console.log(name);

let begruessung = 'Hallo' + first_name + ' ' + second_name;
begruessung = 'Hallo' + name;
console.log(begruessung);

let all = name + '(' + age + ' Jahre)';
console.log(all);

let mehrzeilig =
  ' ich will diesen string ' +
  '\nin der nächsten Zeile fortsetzten' +
  '\nweiter' +
  '\nweiter';
