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

// items setzen Session Storrage
sessionStorage.setItem('Hallo', 'firstandlastname2');
// items setzen Session Storrage
sessionStorage.setItem('Farbe', 'color2');
// items löschen Session Storrage
sessionStorage.removeItem('Farbe');
// Session Storage säubern
sessionStorage.clear();
