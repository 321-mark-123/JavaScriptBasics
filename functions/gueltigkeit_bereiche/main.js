'use strict';
/* globale und lokale variablen
 *globale variablen: werden ausserhalb von codeblöcken deklariert
 *lokale variablen: werden innheralb von {} deklariert und nur dort gültig und in den Codeblöcken innerhalb
 *----------
 *globaler Gültigkeitsbereich: var_1
 *      lokaler Gültigkeitsbereich_1: var_2
 *          lokaler Gültigkeitsbereich_1.1: var_3
 *      lokaler Gültigkeitsbereich_2: var_4
 *
 */
// *globaler Gültigkeitsbereich: var_1
let var_1 = 'var_1'; //gueltig überall globale Variable

const my_function = function () {
  // *      lokaler Gültigkeitsbereich_1: var_2
  let var_2 = 'var_2'; // nur gueltig in Klammern {} lokale variable
  if (true) {
    //*        lokaler Gültigkeitsbereich_1.1: var_3
    let var_3 = 'var_3';
    console.log('---if----');
    console.log(var_1); //i.O
    console.log(var_2); //i.O
    console.log(var_3); //i.O
  }
  console.log('---after if in function----');
  console.log(var_1); //i.O
  console.log(var_2); //i.O
  // console.log(var_3); //error not defined
};

if (true) {
  // *      lokaler Gültigkeitsbereich_2: var_4
  let var_4 = 'var_4';
  console.log('---if-Bereich_2---');
  console.log(var_4); //i.O
}
my_function();
console.log('---after-function----');
console.log(var_1); //i.O
//console.log(var_2); //error not defined variable hier nicht mehr existent
//console.log(var_3); //error not defined
