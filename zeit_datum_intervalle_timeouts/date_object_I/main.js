'use strict';
let d = new Date(); //aktuelles Datum + Zeit
console.log(d);
// Unix Zeitrechnung Zeit in ms seit 1.1.1970

Date.now(); //allg zur Verügung stehend
console.log(Date.now());

let e = new Date(1650642548180);
console.log(e);

let f = new Date('Apr 21 2021 17:50:52 GMT+0200');
console.log(f);
/**newDate (jahr, monats-index[,tag[,stunde[,minute[,sekunde[, millisecunde]]]]]) */
let g = new Date(2021, 6); // monate 1-12 IndexMonate 0-11  6=Juli 7=August
console.log(g);
