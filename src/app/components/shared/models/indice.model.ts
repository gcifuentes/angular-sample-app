import { Currency } from "./currency.model"

export class Indice{
  cobre : Currency;
  dolar: Currency;
  euro: Currency;
  ipc: Currency;
  ivp: Currency;
  oro: Currency;
  plata: Currency;
  uf: Currency;
  utm: Currency;
  yen: Currency;

  constructor(indice : Indice){
    this.cobre = indice.cobre
    this.dolar = indice.dolar
    this.euro = indice.euro
    this.ipc = indice.ipc
    this.ivp = indice.ivp
    this.oro = indice.oro
    this.plata = indice.plata
    this.uf = indice.uf
    this.utm = indice.utm
    this.yen = indice.yen
  }
}
