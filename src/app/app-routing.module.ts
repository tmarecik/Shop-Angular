import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductsComponent} from "./shop/products/products.component";
import {ShippingComponent} from "./shop/shipping/shipping.component";
import {EditorComponent} from "./shop/products/editor/editor.component";
import {UsersComponent} from "./shop/users/users.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},                      //dodajemy obiekty do tablicy routowania zeby  mieć do nich dostęp z poziomy przeglądarki
  {path: 'shop', component: ShopComponent, children: [          //te komponenty są dziecmi komponenty shop, zeby suie do nich dostac 'shop/komponent'
      {path: '' , component: ProductsComponent},                //default'owa scezka po zaladowaniu komponentu shop
      {path: 'editor', component: EditorComponent},
      {path: 'editor/:id', component: EditorComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/editor', component: EditorComponent},
      {path: 'products/editor/:id', component: EditorComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'users', component: UsersComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
