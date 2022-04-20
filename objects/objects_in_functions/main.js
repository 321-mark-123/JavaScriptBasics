'use strict';
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

const kontostand_ausgeben = function (konto) {
  console.log(
    `${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} Euro auf dem Konto`
  );
};
console.log('--obj-in-function--');
kontostand_ausgeben(konto_1);
console.log('------');
kontostand_ausgeben(konto_2);
