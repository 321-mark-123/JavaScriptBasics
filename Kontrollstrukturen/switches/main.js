'use strict';
//ausdruck wird mit Wert verglichen
// für den Fall das ausdruck === wert_1 dann wird Code ausgefuehrt
// '42' != 42
switch (ausdruck) {
  //ausdruck === wert_1 ?
  case wert_1:
    //Code
    break; // switch wird verlassen break optional
  // ohne break wird code im folgenden  case fortgefuehrt
  //ausdruck === wert_2 ?
  case wert_2:
    //Code
    break; // switch wird verlassen break optional
  // ohne break wird code im folgenden  case fortgefuehrt
  //ausdruck === wert_3 ?
  case wert_3:
    //Code
    break; // switch wird verlassen break optional
  //ausdruck == kein Wert dann default!
  // default ist optional am Ende
  default:
    //Code
    break; // switch wird verlassen break optional
}
