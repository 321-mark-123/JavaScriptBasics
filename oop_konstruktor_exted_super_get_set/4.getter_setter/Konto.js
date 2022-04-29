'use strict';
//jede Klasse bekommt eine eigen js Datei beginnt mit Grossbuchsaben
class Konto {
  constructor(iban, inhaber, einzahlung) {
    this.iban = iban;
    this.inhaber = [inhaber];
    this.saldo = einzahlung;
    this.aktiv = true;
  }
  //getter setter Datenkapselung
  set einzahlen(einzahlung) {
    this.saldo += einzahlung;
  }
  set abheben(auszahlung) {
    this.saldo -= auszahlung;
  }
  get kontostand_abfragen() {
    return this.saldo;
  }
}
