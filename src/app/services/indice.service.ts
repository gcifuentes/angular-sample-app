import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  private server = 'http://localhost:9150';
  private indiceUrl = '/api/get-last-indices';
  private lastCurrenciesUrl = '/api/get-last-currency/list'

  constructor(private http: HttpClient){

  }

  public getIndice() : Observable<Indice> {
    return this.http.get<Indice>(this.server + this.indiceUrl);
  }

  public getLastCurrenciesList() : Observable<Currency[]>{
    return this.http.get<Currency[]>(this.server + this.lastCurrenciesUrl);
  }
}

interface Indice{
  cobre : Currency,
  dolar : Currency,
  euro : Currency
  ipc : Currency,
  ivp : Currency,
  oro : Currency,
  plata : Currency,
  uf : Currency,
  utm : Currency,
  yen: Currency
}

interface Currency{
  key : string,
  name : string,
  unit : string,
  date : number,
  value : number
}
