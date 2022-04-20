'use strict';
/*
let iban = 'DE1234567891011121314';
let bic = 'DE111122';
let kontostand = 3500;
let aktiv = true;
*/
// inahber objectFit:
/*
let besitzer = {
  Vorname: 'hug',
  Nachname: 'Karl',
  Geschlecht: 'm',
  Alter: 34,
};
console.log(besitzer);

let besitzer_2 = {
  Vorname: 'Mutti',
  Nachname: 'Mutti',
  Geschlecht: 'w',
  Alter: 12,
};
*/
// werte auslesen

let konto_1 = {
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

let konto_2 = {
  iban: 'DE1234567891011121999',
  bic: 'DE111122',
  inhaber: {
    vorname: 'Mutti',
    nachname: 'Mutti',
    geschlecht: 'w',
    alter: 18,
  },
  kontostand: 13500,
  aktiv: true,
};

let auto = {
  marke: 'Ford',
  model: 'Kuga',
  kraftstoffart: 'Benzin',
  kilometerstand: '1000',
  austattung: {
    navi: 'true',
    klima: 'true',
    sitzheizung: 'true',
    tempomat: 'true',
    panoramadach: 'false',
  },
  zustand: 'checkheft, gebraucht',
  preis: '10000',
};
let wert_1 = konto_1.iban;
let wert_2 = konto_2.iban;
let wert_3 = konto_1.inhaber.vorname;
console.log(wert_1);
console.log(wert_2);
console.log(wert_3);

console.log(
  `${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand} Euro auf dem Konto`
);
// eigenschaften setzen (dot notation)
konto_1.abhebelimit = 1000;
console.log(`abhebelinit: ${konto_1.abhebelimit}`);
konto_1.kontostand = 3000;
console.log(`kontostand: ${konto_1.kontostand}`);
console.log(`konto: ${konto_1}`);

console.log(`-------auto---------------`);
auto.ps = 105;
auto.model = 'fiesta';
console.log(`auto: Ein ${auto.marke} ${auto.model} hat ${auto.ps}PS.`);
