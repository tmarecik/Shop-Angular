import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./shop/products/Product";

const BASE_URL = 'http://localhost:8080/api'
const HTTP_OPTION = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${BASE_URL}/products`);
  }

  removeProducts(id: number){
    return this.httpClient.delete(`${BASE_URL}/products/remove/${id}`)
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${BASE_URL}/products/single/${id}`)
  }

  saveProduct(product: Product){
    return this.httpClient.post(`${BASE_URL}/products/save`, JSON.stringify(product), HTTP_OPTION);
  }

}
