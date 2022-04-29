//import eines default
//import { default as oa_objekt_anzeigen } from './utils/helper.js';
import oa_objekt_anzeigen from './utils/helper.js';
import { max, sabrina } from './utils/settings.js';
// benannter import eines export
import { Konto as k } from './classes/Konto.js';
//import eines benannten exports
import Pusteblume from './classes/Kinderkonto.js';

oa_objekt_anzeigen(new k('DE6206752564419854', max.name, max.vermoegen));
oa_objekt_anzeigen(new Pusteblume('DE6206752564419740', sabrina.name, sabrina.vermoegen, 500));
