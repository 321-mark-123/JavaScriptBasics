'use strict';
let numbers = [2, 4, 6, 8, 10, 11, 12, 16, 240, 30, 22, 46];
/**
 * filter() erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.
 *
 * let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 * callback
* Eine Funktion, um jedes Element des Arrays zu testen. Die Funktion gibt true zurück, um das Element zu behalten, ansonsten false.
** element
* Das aktuell zu testende Element aus dem Array.
** index Optional
* Der Index des aktuell zu testenden Elements aus dem Array.
** array Optional
* Das Array auf welchem filter aufgerufen wurde.
** thisArg Optional
* Wert, der als this innerhalb der Funktion genutzt wird.

 */
let less_equal_twenty = numbers.filter(function (element) {
  if (element <= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(less_equal_twenty);
