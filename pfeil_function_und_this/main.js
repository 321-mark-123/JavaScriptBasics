'use strict';
//  this refernziert das Objekt in dessen Kontext es aufgerufen wird

let person_1 = {
  vorname: 'vorname',
  nachname: 'nachname',
  alter: 'alter',
  meine_methode_1() {
    console.log(this);
  },
};
person_1.meine_methode_1();
// durch nutzung von this inerhalb einer function fällt das this aus dem Kontext
// strict mode = undefined ohne strict bezieht es sich dann auf das window objekt
//!!! this fällt aus dem Kontext!!!
let person_2 = {
  vorname: 'vorname',
  nachname: 'nachname',
  alter: 'alter',
  meine_methode() {
    const meine_function = function () {
      console.log(this);
    };
    meine_function();
  },
};
person_2.meine_methode();
//pfeilfunction erhalten den Kontext kein neuer Kontext
// im Kontext von Objecten ist es besser nach möglich mit Pfeilfunctionen zu arbeiten
let person_3 = {
  vorname: 'vorname',
  nachname: 'nachname',
  alter: 'alter',
  meine_methode() {
    const meine_function = () => console.log(this);
    meine_function();
  },
};
person_3.meine_methode();
