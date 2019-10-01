import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
// import { homedir } from 'os';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
       path: 'products',
       loadChildren: './components/shop/shop.module#ShopModule'
      },
      {
        path: 'pages',
        loadChildren: './components/pages/pages.module#PagesModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
