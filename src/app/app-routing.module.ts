import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddtoOrdersComponent } from './addto-orders/addto-orders.component';
import { CartsComponent } from './carts/carts.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { FashionComponent } from './categories/fashion/fashion.component';
import { GroomingComponent } from './categories/grooming/grooming.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"products",component:ProductlistComponent},
  {path:"carts",component:CartsComponent},
  {path:"register",component:RegistrationComponent},
  {path:"products/:id",component:ProductdetailComponent},
  {path:"products/categories/electronics",component:ElectronicsComponent},
  {path:"products/categories/fashion",component:FashionComponent},
  {path:"products/categories/grooming",component:GroomingComponent},
  {path:"addorder/:id",component:AddtoOrdersComponent},
  {path:"orders",component:OrdersComponent},
  {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
