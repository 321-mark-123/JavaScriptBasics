'use strict';
/**normale function
 *
 */

const multiplizieren = function (a, b) {
  return a * b;
};
console.log(`multiplizieren(5, 10)`);
console.log(multiplizieren(5, 10));
/**Regel 1 function keyword wird durch => nach Parametern ersetzt
 *
 */
const multiplizieren1 = (a, b) => {
  return a * b;
};
console.log(`multiplizieren1 = > { return (5, 10)}`);
console.log(multiplizieren1(5, 10));

/**Regel 2 wenn die Logik der Funktion aus nur einem Ausdruck besteht, kann man die {}
 * weglassen
 *Regel 3 wenn es sich nur um eine retunr Anweisung handel kann uach dies weg gelassen werden
 */
const multiplizieren2 = (a, b) => a * b;
console.log(`multiplizieren2 = > (5, 10)`);
console.log(multiplizieren1(5, 10));
/**
 *
 */
const begruessung = function (name) {
  return `Hallo ${name}`;
};
console.log(`begruessung = function (name) {
  return Hallo ${name}`);
console.log(begruessung('max'));
/**Regel 4 wenn nur ein Parameter übergeben wird können die () weggelassen werden
 *
 */
const begruessung1 = (name) => ` Hallo ${name}`;
console.log(`begruessung1 = (name) Hallo ${name}`);
console.log(begruessung1('max'));

const sinnDesLebens = function () {
  return 42;
};
console.log(`const sinnDesLebens = function () {
  return 42;
};`);
console.log(sinnDesLebens());
/**Regel 5 wenn keine Parameter übergeben werden müssen () gesetzt werden
 *
 */
const sinnDesLebens1 = () => 42;

console.log(`const sinnDesLebens1 = () => 42 `);
console.log(sinnDesLebens1());

let einkaufsliste = ['Brot', 'Käse', 'Tomaten', 'Butter', 'Eier', 'Orangensaft'];
/**
 *normale function
 */
einkaufsliste.forEach(function (e) {
  console.log(e);
});
// Pfeil function sind praktisch in call back functionen
einkaufsliste.forEach((e) => console.log(e));
