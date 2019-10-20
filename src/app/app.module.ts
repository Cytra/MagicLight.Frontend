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

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    AngularFirestoreModule ,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    ShopModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
