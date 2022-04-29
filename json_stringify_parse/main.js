'use strict';
let k = new Konto('DE6206752564419854', 'Max Mustermann', 3500);
console.log(k);

let k_als_json_string = JSON.stringify(k);
console.log('k_als_json! nicht Klasse');
console.log(k_als_json_string);

let k_als_object = JSON.parse(k_als_json_string);
console.log('k_als_object! nicht Klasse');
console.log(k_als_object);

let k_new = new Konto(k_als_object._iban, k_als_object._inhaber, k_als_object._saldo);
console.log('k_wieder_als_Klasse! ');
console.log(k_new);
