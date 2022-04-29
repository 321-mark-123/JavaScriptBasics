class Kinderkonto extends Konto {
  //neue Klasse Kinderkonto extends/erweitert Konto
  // würde einen neuen constructor erzeugen und den Bezug zu Konto zerstören
  //   constructor(limit) {
  //     this.limit = limit;
  //   }
  //kindklasse erbt alles von Elternklasse + ergänzungen
  constructor(iban, inhaber, einzahlung, limit) {
    super(iban, inhaber, einzahlung);
    this._limit = limit * -1;
  }
  _saldo_pruefen_1(auszahlung) {
    if (this._saldo - auszahlung < this._limit) {
      return false;
    } else {
      return true;
    }
  }
  //=
  _saldo_pruefen(auszahlung) {
    return this._saldo - auszahlung < this._limit ? false : true;
  }
  abheben1(auszahlung) {
    if (this._saldo_pruefen(auszahlung)) {
      super.abheben(auszahlung);
    } else {
      console.log('auszahlung nicht möglich : limit überschritten');
    }
  }
  //=
  abheben(auszahlung) {
    this._saldo_pruefen(auszahlung)
      ? super.abheben(auszahlung)
      : console.log('auszahlung nicht möglich : limit überschritten');
  }
}
