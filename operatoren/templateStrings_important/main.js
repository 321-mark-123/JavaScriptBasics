'use strict';

let first_name = 'Hugo';
let second_name = 'Fresh';
let age = 33;

let name = `${first_name} ${second_name}`;
console.log(name);

let begruessung = `Hallo ${first_name} ${second_name}!`;
console.log(begruessung);

let all = `${first_name} ${second_name}(${age} Jahre)`;

let multiline = `Hallo ${first_name}
Du bist ${age} Jahre alt.
wie gehts?`;
console.log(multiline);
let kontatinierte_templ_string_1 =
  `Hallo ${first_name}` + `Du bist ${age} Jahre alt.` + `wie gehts?`;
console.log(kontatinierte_templ_string_1);
