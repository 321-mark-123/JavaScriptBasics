'use strict';
//jede Klasse bekommt eine eigen js Datei beginnt mit Grossbuchsaben
class Konto {
  constructor(iban, inhaber, einzahlung) {
    this.iban = iban;
    this.inhaber = [inhaber];
    this.saldo = einzahlung;
    this.aktiv = true;
  }
}
