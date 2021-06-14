export class Currency{
  key : string;
  name : string;
  unit : string;
  date : number;
  value : number;

  constructor(currency : Currency){
    this.key = currency.key
    this.name = currency.name
    this.unit = currency.unit
    this.date = currency.date
    this.value = currency.value
  }
}
