import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartsService.getShippingPrices();
  constructor(private cartsService: CartsService) { }

  ngOnInit(): void {
  }

}
