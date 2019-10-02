import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  paymentSelection:string;
  paymentWaySelection:string;
  checkoutForm: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public buyProducts: CartItem[] = [];

  amount: number;
  payments: string[] = ['Kurjeriu', 'Atsimsiu parduotuvėje'];
  paymantWay: string[] = ['Sumokėti kurjeriui', 'Mokėsiu parduotuvėje'];

  constructor(private cartService: CartService, public productService: ProductService, public afAuth: AngularFireAuth, private fun: AngularFireFunctions) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.buyProducts = products);
    this.getTotal().subscribe(amount => this.amount = amount);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public checkout(formValues){
    var cartProducts: any;
    this.cartItems.subscribe(products => cartProducts = products);
    var price = 0 ;
    this.cartService.getTotalAmount().subscribe( x => price = x);
    var productString = "";

    cartProducts.forEach( item => {
      productString += item.product.ProductNumber + " ";
      productString += item.product.category + " ";
      productString += item.product.name + " ";
      productString += item.product.price + " ";
      productString += item.quantity + " ";
      productString += " | "
    })
    
    const callable = this.fun.httpsCallable('neworder');
    callable(
    { 
      name : formValues.name + " " + formValues.subject,
      email : formValues.email,
      address : formValues.address,
      city : formValues.town,
      country : formValues.state,
      zipCode : formValues.postcode,
      phone : formValues.phone,
      addInfo : formValues.content,
      products : productString,
      price : price,
      shipping : this.paymentWaySelection,
      willpay : this.paymentSelection,
 
    }).subscribe();
  }
}