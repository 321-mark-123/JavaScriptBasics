'use strict';

//console.log('document.cookie');
//syntax:
// document.cookie ="cookie_name = [cookie_wert][; max-age_in_s]"
document.cookie = 'vorname=vorname';
document.cookie = `${encodeURIComponent('ein key;value-paare')}=${encodeURIComponent('key=value')}`;
document.cookie = '10s_cookie=; max-age=10';
document.cookie = `mein_alter=2; max-age=${60 * 60 * 24}`;

setTimeout(() => console.log(document.cookie), 9000);
setTimeout(() => console.log(document.cookie), 10100);
/**cookies setzen
 *
 * @param {name cookie} name
 * @param {value optional} wert
 * @param {value optional} haltbarkeit
 */
const set_cookie = function (name, wert, haltbarkeit) {
  let cookie = `${encodeURIComponent(name)}=`;
  if (wert) {
    cookie += `${encodeURIComponent(wert)}`;
  }
  if (haltbarkeit) {
    cookie += `; max-age=${haltbarkeit}`;
  }
  document.cookie = cookie;
};

set_cookie('passwort', '%$§%&', 60 * 60 * 2);
console.log(document.cookie);

//cookies überschreiben
set_cookie('zahlen', '1234', 60 * 60);
set_cookie('zahlen', '5678', 60 * 6);
console.log(document.cookie);
//cookies löschen
const delete_cookie = function (name) {
  document.cookie = `${encodeURIComponent(name)}=; max-age=-1`;
};

delete_cookie('10s_cookie');
console.log(document.cookie);

//cookies auslesen
//vorname=vorname; ein%20key%3Bvalue-paare=key%3Dvalue; mein_alter=2; passwort=%25%24%C2%A7%25%26; zahlen=5678
const get_cookie = function (name) {
  let cookies_array = document.cookie.split(';');
  //(5) ['vorname=vorname', ' ein%20key%3Bvalue-paare=key%3Dvalue', ' mein_alter=2', ' passwort=%25%24%C2%A7%25%26', ' zahlen=5678']
  console.log(cookies_array);
  let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
  for (const cookie of cookies_array) {
    if (cookie.match(regex)) {
      return decodeURIComponent(cookie.replace(regex, ''));
    }
  }
};
console.log(get_cookie('mein_alter'));
// cookies prüfen
const has_cookie = function (name) {
  let cookies_array = document.cookie.split(';');
  //(5) ['vorname=vorname', ' ein%20key%3Bvalue-paare=key%3Dvalue', ' mein_alter=2', ' passwort=%25%24%C2%A7%25%26', ' zahlen=5678']
  console.log(cookies_array);
  let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
  for (const cookie of cookies_array) {
    if (cookie.match(regex)) {
      return true;
    }
  }
  return false;
};
console.log(has_cookie('zahlen'));
