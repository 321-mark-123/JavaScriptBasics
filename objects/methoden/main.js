'use strict';
/**objecte koennen functionen enthalten
 * diese nennt man dann methoden
 * mit this wird auf eigenschaften des objects
 * zugegriffen
 *
 * objects can include functions they are called
 * methods.
 * with this you can get property's from the object
 */
console.log('----konto----');
let konto = {
  iban: 'DE1234567891011121314',
  bic: 'DE111122',
  inhaber: {
    vorname: 'John',
    nachname: 'Dow',
    geschlecht: 'm',
    alter: 34,
  },
  kontostand: 3500,
  aktiv: true,
  //methode einzahlen
  einzahlen(e) {
    this.kontostand += e; //diese objekt konto
  },
  //methode auszahlen
  auszahlen(a) {
    this.kontostand -= a; //diese objekt konto
  },
};

console.log(konto.kontostand);
konto.einzahlen(500);
konto.auszahlen(1500);
console.log(konto.kontostand);

/*
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
*/
//Methode in Object einbauen
console.log('----person----');
// object = person
let person = {
  vorname: 'John',
  nachname: 'Dow',
  alter: 35,
  verabreiten() {
    return {
      n2: `${this.vorname} ${this.nachname}`, //wir sind im object ->this.
      z2: `${this.vorname} ${this.nachname} (${this.alter} Jahre) `,
      b2: `Hallo ${this.vorname} ${this.nachname} ! `,
    };
  },
};
console.log(person.verabreiten());
