import { Indice } from './../shared/models/indice.model';
import { IndiceService } from './../../services/indice.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/models/currency.model';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  currencyList: any;
  displayedColumns: string[] = ['currency', 'name', 'unit',
                                'date', 'value'];

  constructor(private indiceService: IndiceService) {
  }

  ngOnInit(): void {
    this.indiceService.getLastCurrenciesList()
                      .subscribe(data => this.currencyList = data);

  }

  epochToLocalDate(currency : Currency) : string{
    return new Date(currency.date * 1000).toLocaleString();
  }
}
