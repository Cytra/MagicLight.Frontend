import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from '../ /home/home.component';
import { HomeComponent } from '../shop/home/home.component';
import { ProductDetailsComponent } from '../shop/products/product-details/product-details.component';
import { ProductLeftSidebarComponent } from '../shop/products/product-left-sidebar/product-left-sidebar.component';
import { HomeTwoComponent } from '../shop/home-two/home-two.component';
import { HomeThreeComponent } from '../shop/home-three/home-three.component';
import { HomeFourComponent } from '../shop/home-four/home-four.component';


// Routes
const routes: Routes = [
  // { path: 'one', component: HomeComponent },
  // { path: 'two', component: HomeTwoComponent },
  // { path: 'three', component: HomeThreeComponent },
  // { path: 'four', component: HomeFourComponent },
  { path: ':category', component: ProductLeftSidebarComponent },
  { path: ':id', component: ProductDetailsComponent }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
