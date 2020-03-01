import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  //serwis do przechowywania produktów
  protected products: Product[] = [                                                 //stad wychodzi bezposrenio referencj do tej tablicy dlatego zeby nik jej nie zmodyfikował znacznik prptected
    {id: 1, name: 'Produkt1', price: 10.00, quantity: 1000, availability: true},
    {id: 2, name: 'Produkt2', price: 250.00, quantity: 300, availability: false}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products)
  }

  removeProduct(id: number){
    const productIndex = this.products.findIndex(p => p.id === id);   //p -> wynik iteracji po tablicy product i szuka id z parmetru funkcji
    this.products.splice(productIndex, 1);
  }

  private idCount: number = 3;

  saveProduct(product: Product){

    if (product.id){
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }


  }

  getProduct(id:  number){
    const productIndex = this.products.findIndex(p => p.id === id);
     return {...this.products[productIndex]};
  }

}
