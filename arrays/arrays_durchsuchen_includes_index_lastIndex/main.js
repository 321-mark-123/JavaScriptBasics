'use strict';
let personen = ['Sebastion', 'Marcel', 'Anna', 'Dennis', 'Mia'];
/**includes()
 * durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
 * Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde
 * Syntax: includes(Suchwert[, Startindex]) [optional]
 * nicht destruktiv
 */
console.log(personen);
console.log('-----Anna-----');
console.log(personen.includes('Anna'));
console.log('-----Hugo-----');
console.log(personen.includes('Hugo', 0));
console.log('-----Marcel-----');
console.log(personen.includes('Marcel'));
console.log(personen.push('Hugo'));
console.log('-----Hugo-----');
console.log(personen.includes('Hugo', 3));
/**indexOf()
 * durchsucht das Array ab einen Startindex nach einem Wert und gibt den Index der
 * ersten Fundstelle zurück, wenn der Wert gefunden wurde, oder -1 , wenn der Wert nicht
 * im Array gefunden wurde.
 * Syntax: indexOf(Suchwert[, Startindex]) [optional]
 *  * nicht destruktiv
 */
console.log(personen.indexOf('Marcel', 0)); //1
console.log(personen.indexOf('Marcel', 2)); //-1
/**lastIndexOf()
 * durchsucht das Array ab einen Startindex rückwärts nach einem Wert und gibt den Index der
 * ersten Fundstelle zurück, wenn der Wert gefunden wurde, oder -1 , wenn der Wert nicht
 * im Array gefunden wurde.
 * Syntax: lastIndexOf(Suchwert[, Startindex]) [optional]
 *  * nicht destruktiv
 */
let personen1 = ['Sebastion', 'Marcel', 'Anna', 'Marcel', 'Mia'];
console.log(personen1);
console.log(personen1.lastIndexOf('Marcel')); //3
console.log(personen1.lastIndexOf('Marcel', 1)); // ab 1 ->1
console.log(personen1.lastIndexOf('Marcel', 2)); // ab2 -> 1
