import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './comps/product/product.component';
import {RupiahPipe} from '../pipes/rupiah.pipe';


@NgModule({
  declarations: [ProductComponent, RupiahPipe],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports: [
    RupiahPipe
  ]
})
export class ShopModule { }
