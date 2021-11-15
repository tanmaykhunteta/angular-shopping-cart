import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // items = this.cartsService.getItems();
  items = this.cartsService.getItems();
  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartsService: CartsService,
    private formBuilder: FormBuilder,
  ) {}
  onSubmit(): void {
    this.items = this.cartsService.clearCart();
    console.warn('Your order has been placed', this.checkOutForm.value);
    this.checkOutForm.reset();
  }

  ngOnInit(): void {}
}
