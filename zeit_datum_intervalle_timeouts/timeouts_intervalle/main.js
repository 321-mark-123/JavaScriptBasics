'use strict';
//timeouts Zeitverzögerung
//intervall in abhängigkeit von Zeit immer u immer wieder
// clear ein u auskommentieren
/**timeouts
 * setTimeout(callback_funvtion, zeitspanne_in_ms[,paeameter_1,[paramter_n]])
 */
console.log('los1000');
console.log(
  setTimeout(() => {
    console.log('fertig1000');
  }, 1000)
);
/**timeouts
 * setTimeout(code-string, zeitspanne_in_ms[,paeameter_1,[paramter_n]])
 */ //  escapen von ""  \"\"
console.log('los1500');
console.log(setTimeout("console.log('fertig1500');", 1500));

clearTimeout(1);
clearTimeout(2);
/**setIntervall */

console.log('los2000');
console.log(
  setInterval(function () {
    console.log('fertig2000');
    clearInterval(3);
  }, 2000)
);
clearInterval(4);
console.log('los2500');
console.log(
  setInterval(() => {
    console.log('fertig2500');
    clearInterval(4);
  }, 2500)
);
console.log(setInterval('console.log("fertig3000");', 3000));

clearInterval(5);
