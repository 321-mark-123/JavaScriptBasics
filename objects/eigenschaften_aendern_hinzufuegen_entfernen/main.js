'use strict';
//object benoetigt keine eigenschaft
let auto = {
  marke: 'BMW',
};
//eigenschaft aendern
auto.marke = 'Tesla';
console.log(auto.marke);

//eigenschaft hinzufuegen
auto.model = 'Model 3';
auto.ps = 450;
auto['farbe'] = 'rot';

console.log('Auto:-----');
console.log(auto);

//eigenschaft entfernen
delete auto.farbe;
console.log('Auto:del-----');
console.log(auto);
