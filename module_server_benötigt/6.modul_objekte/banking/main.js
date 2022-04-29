import * as Helper from './utils/helper.js';
import * as Setting from './utils/settings.js';
import * as KK from './classes/Kinderkonto.js';
import * as K from './classes/Konto.js';

console.log(Helper);
console.log(Setting);
console.log(KK);
console.log(K);

Helper.objekt_anzeigen(new K.Konto('DE6206752564419854', Setting.person_1.name, Setting.person_1.vermoegen));
Helper.objekt_anzeigen(
  new KK.Kinderkonto('DE6206752564419740', Setting.person_2.name, Setting.person_2.vermoegen, 500)
);
