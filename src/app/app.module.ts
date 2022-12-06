import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { TermsAndconditionsComponent } from './components/terms-andconditions/terms-andconditions.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerService } from './services/seller.service';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    RegisterComponent,
    SigninComponent,
    TermsAndconditionsComponent,
    CategoriesComponent,
    SellerHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
