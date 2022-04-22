'use strict';
let s = ' lorem ipsum dolor sit amet ipsum. ';

console.log(s.length); //35
console.log(s.indexOf('ipsum')); //7
console.log(s.indexOf('ipsum', 20)); //28
console.log(s.lastIndexOf('ipsum')); //28 methode von hinten startindex von vorne
console.log(s.lastIndexOf('ipsum', 10)); //7 methode von hinten startindex von vorne
console.log(s.includes('sit')); //true
console.log(s.includes('sit', 28)); //false
console.log(s.toLowerCase()); //lorem ipsum dolor sit amet ipsum.
console.log(s.toUpperCase()); //LOREM IPSUM DOLOR SIT AMET IPSUM.
console.log(s.trim()); // z.B. leerzeichen "ausfiltern"
console.log(s.repeat(5)); //

//regex101.com
// regular expressions (passwoerter 2Sonderzeichen Groß u Kleinschreibung) valide email Adresse
//\w{5} //ale wörter mit 5 Buchstaben
//d\w{4} //d und 4 buchstaben
// alle Programmiersprechen haben diese , eine weitere Technologie RegEx

let regex = /i\w{4}/;

let regex_g = /i\w{4}/g;
console.log(s.search(regex)); //7 //kein Startindex
console.log(s.replace(regex, 'opsum')); // 1xipsum tausch
console.log(s.match(regex));
console.log(s.replace(regex_g, 'opsum')); // alle ipsum getauscht da modifier g nach letzten /
console.log(s.match(regex_g));
console.log(s.search(/i\w{4}/)); //7 //kein Startindex
console.log(s.replace(/i\w{4}/, 'opsum')); // 1xipsum tausch
console.log(s.match(/i\w{4}/));
console.log(s.replace(/i\w{4}/g, 'opsum')); // alle ipsum getauscht da modifier g nach letzten /
console.log(s.match(/i\w{4}/g));
