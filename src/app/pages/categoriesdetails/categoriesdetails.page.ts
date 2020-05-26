import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoriesdetails',
  templateUrl: './categoriesdetails.page.html',
  styleUrls: ['./categoriesdetails.page.scss'],
})
export class CategoriesdetailsPage implements OnInit {

  shop = [{
    'name': { 'first': 'Fried', 'last': 'Potato Chips' },
    'qty': 1,
    'price': 150
  }]

  constructor() { }

  ngOnInit() {
  }

  incrementQty(index: number) {
    this.shop[index].qty += 1;
  }

  decrementQty(index: number) {
    this.shop[index].qty -= 1;
  }
}
