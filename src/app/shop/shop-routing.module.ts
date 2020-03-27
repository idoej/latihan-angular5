import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './comps/product/product.component';
import {AuthGuard} from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
