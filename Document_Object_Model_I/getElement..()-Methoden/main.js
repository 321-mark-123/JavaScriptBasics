'use strict';
//Methoden im DOM element
// elemente mit ID , ID ist einmalig
let el_by_id_1 = document.getElementById('navigation');
console.log(el_by_id_1);
//id nicht vorhanden (null)
let el_by_id_2 = document.getElementById('test');
console.log(el_by_id_2);
// elemente mit class , classes sind nicht einmalig
let els_by_class_name = document.getElementsByClassName('jumbotron');
console.log(els_by_class_name);
// class ist nicht vorahnden length = 0
let els_by_class_name_1 = document.getElementsByClassName('test');
console.log(els_by_class_name_1);
console.log(els_by_class_name_1.length == 0); //true nix gefunden
// tag name
let els_by_tag_name_1 = document.getElementsByTagName('p');
console.log(els_by_tag_name_1);
// tag nicht vorhanden
let els_by_tag_name_2 = document.getElementsByTagName('test');
console.log(els_by_tag_name_2);
console.log(els_by_tag_name_2.length == 0); //true nix gefunden
