'use strict';
//jede Klasse bekommt eine eigen js Datei beginnt mit Grossbuchsaben
// Konvention _ -> privat nicht von ausserhalb zugreifen
class Konto {
  constructor(iban, inhaber, einzahlung) {
    this._iban = iban;
    this._inhaber = [inhaber];
    this._saldo = einzahlung;
    this._aktiv = true;
  }
  //getter setter Datenkapselung
  einzahlen(einzahlung) {
    this._saldo += einzahlung;
  }
  abheben(auszahlung) {
    this._saldo -= auszahlung;
  }
  kontostand_abfragen() {
    return this._saldo;
  }
}
