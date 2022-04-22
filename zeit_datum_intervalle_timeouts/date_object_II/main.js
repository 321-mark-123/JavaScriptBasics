'use strict';
console.log('----');

let d = new Date();
console.log(d);
// analog zu setter Methoden gibt es getter Methoden
d.setFullYear(2010);
d.setMonth(2); //Monatsindex Januar = 0 Dez = 13
d.setDate(16);
d.setHours(8);
d.setMinutes(13);
d.setMilliseconds(111);
console.log('-set-');
console.log(d);
console.log('-get-');
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d);

let d_UTC = new Date();
console.log(d);
d_UTC.setUTCFullYear(2010);
d_UTC.setUTCMonth(2); //Monatsindex Januar = 0 Dez = 13
d_UTC.setUTCDate(16);
d_UTC.setUTCHours(8);
d_UTC.setUTCMinutes(13);
d_UTC.setUTCMilliseconds(111);
console.log('-setUTC-');
console.log(d_UTC);
console.log('-getUTC-');
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());
console.log(d_UTC);

let d_unix = new Date();

d_unix.setTime(156855700000);
console.log(d_unix);
console.log(d_unix.getTime());
