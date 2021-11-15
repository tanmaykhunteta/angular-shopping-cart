import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // items = this.cartsService.getItems();
  items = this.cartsService.getItems();
  constructor(private cartsService: CartsService) { }
  
  

  ngOnInit(): void {
  }

}
