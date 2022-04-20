'use strict';
let essen = 'salat';
switch (essen) {
  case 'nudeln':
  case 'steak': //case wird ausgefuehrt da kein break
  case 'salat': //case wird ausgefuehrt da kein break
    console.log('mag ich');
    break;
  case 'fisch':
  case 'hummer': //case wird ausgefuehrt da kein break
    console.log('fisch ist super');
    break;
  default:
    console.log('nix gefunden !');
    break;
}
