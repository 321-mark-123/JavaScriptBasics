'use strict';
let personen = ['Paul', 'Gustav', 'Marcel', 'Mia', 'Kalle'];
console.log(personen);
personen[1] = 'Pia';
console.log(personen);
/**push
 *push fügt ein Element am Ende des Arrays hinzu und gibnt neue größe zurück
 *destruktiv
 */
personen.push('Gustav');
console.log('--push--');
console.log(personen);
/**pop(): entfernt das letzte Element aus dem Array und gibt es zurück
 * destruktiv
 */
console.log(personen.pop()); //Gustav
console.log(personen);
/**unshift fügt ein Element am Anfang des Arrays hinzu und gibnt neue größe zurück
 * destruktiv
 */
console.log(personen.unshift('May')); //
console.log(personen);
/**shift(): entfernt das erste Element aus dem Array und gibt es zurück
 * destruktiv
 */
console.log(personen.shift()); //
console.log(personen);
