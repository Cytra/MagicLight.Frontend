import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass']
})
export class PriceComponent implements OnInit {


  public priceFrom: number = 1;
  public priceTo: number = 500;
  // Using Output EventEmitter
  @Output() priceFilters = new EventEmitter();

  // define min, max and range
  public min : number = 100;
  public max : number = 500;
  public range = [100,500];

  constructor() { }

  ngOnInit() {  }

  // rangeChanged
  priceChanged(event:any) {
    setInterval(() => {
      this.priceFilters.emit(event);
    }, 500);
  }

  priceFilter() {
    this.priceFilters.emit({
      priceFrom: this.priceFrom,
      priceTo: this.priceTo
    });
  }
}
