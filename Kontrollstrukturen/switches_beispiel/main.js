'use strict';
let ein_name = 'John';
console.log(ein_name);
switch (ein_name) {
  case 'john':
    console.log('Hallo john !');
    break;
  case 'John':
    console.log('Hallo John !');
    console.log('ohne break weiter');
  //break;
  case 'Jon':
    console.log('Hallo Jon !');
    //  console.log('ohne break weiter');
    break;
  default:
    console.log('Hallo nix gefunden !');
    break;
}
