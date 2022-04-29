'use strict';

console.log(localStorage);
//items hinzufügen
localStorage.setItem('name', 'firstandlastname');
console.log(localStorage.getItem('name'));
localStorage.setItem('alter', '3');
console.log(localStorage);
//items entfernen
localStorage.removeItem('alter');
console.log(localStorage);
//local storage säubern
//localStorage.clear();
console.log(localStorage);

// items setzen Session Storage
sessionStorage.setItem('Hallo', 'firstandlastname2');
// items setzen Session Storage
sessionStorage.setItem('Farbe', 'color2');
// items löschen Session Storage
sessionStorage.removeItem('Farbe');
// Session Storage säubern
sessionStorage.clear();
// session storage verwenden wenn Daten vorgehalten werden , pro session
