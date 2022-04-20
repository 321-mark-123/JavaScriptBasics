'use strict';

let my_variable = 'Hugo'; // primitver Datentyp
// komplexer Datentyp
let my_object = {
  zahl: 2000,
};
console.log(my_variable);
console.log(my_object.zahl);
console.log('before');
const my_function = function (v, o) {
  v = 'karl';
  o.zahl = 3000;
};
my_function(my_variable, my_object);
console.log(my_variable); //Hugo
console.log(my_object.zahl); //3000

// call by value (uebergabe als wert): gilt fuer primitve Datentypen (String,number, bollean) Werte werden übergeben
// call by reference (uebergabe als Verweis/Rueckverweis): gilt fuer komplexere Datentypen (Objekte,Funktionen, Arrays)
console.log('----konto----');
let konto = {
  iban: 'DE1234567891011121314',
  bic: 'DE111122',
  inhaber: {
    vorname: 'Hugo',
    nachname: 'Karl',
    geschlecht: 'm',
    alter: 34,
  },
  kontostand: 3500,
  aktiv: true,
};

console.log(konto.kontostand);
const einzahlen = function (k, e) {
  // k.kontostand = k.kontostand + e;
  k.kontostand += e;
};

einzahlen(konto, 500);
console.log(konto.kontostand);

const abheben = function (k, a) {
  k.kontostand -= a;
};
abheben(konto, 1500);
console.log(konto.kontostand);
