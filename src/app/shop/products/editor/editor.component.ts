import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductStorageService} from "../../../product-storage.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {HttpClientService} from "../../../http-client.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  product: any;

  constructor(private  productStorage: ProductStorageService, private router: Router, private activeRoute: ActivatedRoute, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getProductToEdit();
  }
  product: Product = new Product();                                                 //  wywołyjąc obiekt Prooduct w taki sposób wywołyjemy pust obiekt za każdym razem

  saveProduct(product: Product) {
    this.httpClient.saveProduct(product).subscribe(r => {
      ;
      this.router.navigate(['/shop']);
    });
  }

  getProductToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');                                                                //  tak sama nazwa jak w adresie!!
      if (id) {
        this.httpClient.getProduct(Number.parseInt(id)).subscribe(p => this.product = p);
      }
    });
  }


}
