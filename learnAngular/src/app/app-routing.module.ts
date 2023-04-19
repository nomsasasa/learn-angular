import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
// import { NavbarComponent } from './navbar/navbar.component';
//import { CartComponent } from './cart/cart.component';
//import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'cart', component: CartComponent} ,
  {  path:'home',component: HomeComponent},
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
