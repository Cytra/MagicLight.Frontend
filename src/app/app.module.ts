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
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import 'hammerjs';

const config = {
  apiKey: "AIzaSyA4isnpQUQBSTguanS5mco15fluNAgGGYQ",
  authDomain: "magiclight.firebaseapp.com",
  databaseURL: "https://magiclight.firebaseio.com",
  projectId: "magiclight",
  storageBucket: "magiclight.appspot.com",
  messagingSenderId: "902712765932",
  appId: "1:902712765932:web:c2b22bfca50ab8e1ffa4c9"
};

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
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule { }
