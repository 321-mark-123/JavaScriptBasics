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
let konto_1 = {
  iban: 'DE1234567891011121314',
  bic: 'DE111122',
  Inhaber: {
    Vorname: 'Hugo',
    Nachname: 'Karl',
    Geschlecht: 'm',
    Alter: 34,
  },
  kontostand: 3500,
  aktiv: true,
};
console.log(konto_1);

let konto_2 = {
  iban: 'DE1234567891011121999',
  bic: 'DE111122',
  Inhaber: {
    Vorname: 'Mutti',
    Nachname: 'Mutti',
    Geschlecht: 'w',
    Alter: 18,
  },
  kontostand: 13500,
  aktiv: true,
};
console.log(konto_2);

let auto = {
  Marke: 'Ford',
  Model: 'Kuga',
  Kraftstoffart: 'Benzin',
  Kilometerstand: '1000',
  Austattung: {
    Navi: 'true',
    Klima: 'true',
    Sitzheizung: 'true',
    Tempomat: 'true',
    Panoramadach: 'false',
  },
  Zustand: 'checkheft, gebraucht',
  Preis: '10000',
};
console.log(auto);
