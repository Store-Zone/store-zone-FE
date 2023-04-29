import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { CartsComponent } from './carts/carts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { GroomingComponent } from './categories/grooming/grooming.component';
import { FashionComponent } from './categories/fashion/fashion.component';
import { AddtoOrdersComponent } from './addto-orders/addto-orders.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ReviewsComponent,
    AddreviewComponent,
    CartsComponent,
    NavbarComponent,
    FooterComponent,
    ElectronicsComponent,
    GroomingComponent,
    FashionComponent,
    AddtoOrdersComponent,
    AboutComponent,
    OrdersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
