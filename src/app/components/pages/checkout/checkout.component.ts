import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public buyProducts: CartItem[] = [];

  amount: number;
  payments: string[] = ['Kurjeriu', 'Atsimsiu parduotuvėje'];
  paymantWay: string[] = ['Sumokėti kurjeriui', 'Mokėsiu parduotuvėje'];

  constructor(private cartService: CartService, public productService: ProductService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.buyProducts = products);
    this.getTotal().subscribe(amount => this.amount = amount);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public checkout(formValues){
    console.log(formValues);
  }
}
