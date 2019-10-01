import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../../modals/cart-item";
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../../shared/services/sidebar-menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  CartItem: CartItem[] = [];
  public url : any;

  constructor(public router: Router, private cartService: CartService, public sidenavMenuService:SidebarMenuService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.CartItem = shoppingCartItems);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    } )
  }

  ngOnInit() {
  }

}
