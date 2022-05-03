'use strict';
//Methoden im DOM element
// element mit css selektor auswählen
let qs_1 = document.querySelector('body > #navigation > ul');
console.log(qs_1);
// gibt erstes elment zurück
let qs_2 = document.querySelector('.jumbotron');
console.log(qs_2);
// nicht vorhanden null
let qs_3 = document.querySelector('.test');
console.log(qs_3);
//fail nicht valider selector
//let qs_4 = document.querySelector('$7645 >');
//console.log(qs_4);
//querySelectorAll nodelist zurückgeliefert

// elemente mit css selektor auswählen
let qsa_1 = document.querySelectorAll('body > #navigation > ul > li > a');
console.log(qsa_1);
// leere Nodelist mit length 0
let qsa_2 = document.querySelectorAll('.test');
console.log(qsa_2);
//console.log(qsa_2.length == 0);
//
//let qsa_3 = document.querySelectorAll('$7645 >');
//console.log(qsa_3);
