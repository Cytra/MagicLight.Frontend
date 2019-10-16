import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Product} from "../../modals/product.model";
import {CartItem} from "../../modals/cart-item";
// import {ProductService} from "../shared/services/product.service";
import {CartService} from "../shared/services/cart.service";
import { Router, NavigationEnd } from '@angular/router';
// import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';
import {AuthService} from '../shared/services/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public sidenavMenuItems:Array<any>;

  public currencies = ['EUR', 'USD'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];

  public banners = [];

  wishlistItems  :   Product[] = [];

  public url : any;

  // <a [routerLink]="['/home']" routerLinkActive="router-link-active"  mat-button class="mat-button">PRADŽIA</a>
  // <a [routerLink]="['/products/all']" routerLinkActive="router-link-active"  mat-button class="mat-button">PRODUKTAI</a>
  // <a [routerLink]="['/pages/about']" routerLinkActive="router-link-active"  mat-button class="mat-button">APIE MUS</a>
  // <a [routerLink]="['/pages/contact']" routerLinkActive="router-link-active"   mat-button class="mat-button">KONTAKTAI</a>
  // <a [routerLink]="['/pages/cart']" routerLinkActive="router-link-active"   mat-button class="mat-button">KREPŠELIS</a>

  navItems: SidenavMenu[] = [

    {
      displayName: 'PRADŽIA',
          iconName: 'feedback',
          route: '/home'
    },
    {
      displayName: 'PRODUKTAI',
          iconName: 'feedback',
          route: '/products/all'
    },
    {
      displayName: 'APIE MUS',
          iconName: 'feedback',
          route: '/pages/about'
    },
    {
      displayName: 'KONTAKTAI',
          iconName: 'feedback',
          route: '/pages/contact'
    },
    {
      displayName: 'KREPŠELIS',
          iconName: 'feedback',
          route: '/pages/cart'
    },
  ];

  user:any;

  constructor(public router: Router, private cartService: CartService, public auth: AuthService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    } )
    auth.user$.subscribe(user => this.user = user);
  }

  logout(){
    this.auth.singOut();
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.currency = this.currencies[0];
    this.flag = this.flags[0];
  }

  public changeCurrency(currency){
    this.currency = currency;
  }
  public changeLang(flag){
    this.flag = flag;
  }
}
