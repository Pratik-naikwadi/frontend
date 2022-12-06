import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SigninComponent } from './components/signin/signin.component';
import { TermsAndconditionsComponent } from './components/terms-andconditions/terms-andconditions.component';

const routes: Routes = [
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'terms&condition', component: TermsAndconditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
