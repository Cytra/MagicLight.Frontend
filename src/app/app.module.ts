import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule }   from '@angular/forms';

import { SharedModule } from './components/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { ShopModule } from './components/shop/shop.module';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    ShopModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
