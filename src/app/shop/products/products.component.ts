import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productStorage: ProductStorageService, private httpClient: HttpClientService) { }     //wstrzykujemy zaleznosc do serwisu
  // constructor() { }     //wstrzykujemy zaleznosc do serwisu

  ngOnInit(): void {
    this.getProducts();                                    //tutaj wpisujemy subskrybcje
  }
                                                            //  tutaj dojamy tablice produktow
  products: Product[] = [                                   //typujemy naszymi obiekrami (tak jak w java'ie) -> tablica przyjmuje obiekty typu Product
    {id: 1, name: 'Produkt1', price: 10.00, quantity: 1000, availability: true},
    {id: 2, name: 'Produkt2', price: 250.00, quantity: 300, availability: false}
  ];

  //po zaaplikowaniu paterny obserwera:

  getProducts() {
    // this.productStorage.getProducts().subscribe(products => this.products = products)                  //implementacja subskrybcji
    this.httpClient.getProducts().subscribe(products => this.products = products)                  //to zostało dodane jako klijent do zewnetrznego servisu
  }
  removeProduct(id: number){
    this.productStorage.removeProduct(id)
    this.httpClient.removeProducts(id).subscribe(r => {
      // this.getProducts();
    })
  }



}
