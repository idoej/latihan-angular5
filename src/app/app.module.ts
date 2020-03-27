import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './comps/error404/error404.component';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShopModule} from './shop/shop.module';
import localeId from '@angular/common/locales/id';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    ShopModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  // exports: [
  //   RupiahPipe
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
