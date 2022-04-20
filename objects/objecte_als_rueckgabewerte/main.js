'use strict';
let person = {
  vorname: 'John',
  nachname: 'Dow',
  alter: 35,
};
const person_verabreiten = function (p) {
  let name = `${p.vorname} ${p.nachname}`;
  let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre) `;
  let begruessung = `Hallo ${p.vorname} ${p.nachname} ! `;

  let rueckgabe_object = {
    n: name,
    z: zusammenfassung,
    b: begruessung,
  };
  return rueckgabe_object;
};

console.log(person_verabreiten(person));

const person_verabreiten1 = function (p) {
  let rueckgabe_object1 = {
    n1: `${p.vorname} ${p.nachname}`,
    z1: `${p.vorname} ${p.nachname} (${p.alter} Jahre) `,
    b1: `Hallo ${p.vorname} ${p.nachname} ! `,
  };
  return rueckgabe_object1;
};

console.log(person_verabreiten1(person));
const person_verabreiten2 = function (p) {
  return {
    n2: `${p.vorname} ${p.nachname}`,
    z2: `${p.vorname} ${p.nachname} (${p.alter} Jahre) `,
    b2: `Hallo ${p.vorname} ${p.nachname} ! `,
  };
};

console.log(person_verabreiten2(person));
