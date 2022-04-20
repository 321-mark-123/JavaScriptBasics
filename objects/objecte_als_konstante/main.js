'use strict';

const person = {
  vorname: 'John',
  nachname: 'Wayne',
  alter: 48,
  verabreiten() {
    return {
      n2: `${this.vorname} ${this.nachname}`, //wir sind im object ->this.
      z2: `${this.vorname} ${this.nachname} (${this.alter} Jahre) `,
      b2: `Hallo ${this.vorname} ${this.nachname} ! `,
    };
  },
};
console.log(person.verabreiten());
/*
const v = 'test';
//nicht erlaubt
v = 'hallo';// Uncaught TypeError: Assignment to constant variable.
*/
person.vorname = 'Karl';
console.log(person.verabreiten());
person.haarfarbe = 'schwarz';
console.log(person);
delete person.haarfarbe;
console.log(person);
/* nicht erlaubt
person = {};//Uncaught TypeError: Assignment to constant variable.
*/
