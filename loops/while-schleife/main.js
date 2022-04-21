'use strict';
/**while(Bedingung) {
 * Bedingung erfüllt dann Code}
 *Achtung Endlosschleifen möglich
 */

let x = 0; //Zaehlvariable

while (x < 5) {
  x++; // x wird jedesmal um 1 erhoeht bis 5
  console.log(`while:${x}`);
  //x += 1; // x wird jedesmal um 1 erhoeht bis 4
}

let z = 0;
while (z < 10) {
  z++;
  if (z == 5) {
    continue; // aktueller schleifendurchlauf wird abgebrochen
  } else if (z == 7) {
    break; // schleifendurchlauf und while schleife wird abgebrochen
  }
  console.log(z);
}
console.log('schleife');
