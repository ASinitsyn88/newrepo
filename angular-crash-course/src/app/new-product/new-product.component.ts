import { Component } from '@angular/core';
import { ProductService } from "../services/api/products/product.service";
import { Router } from "@angular/router";
import { ProductRequest } from "../services/api/models/product-request";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  productRequest: ProductRequest = {};

  constructor(private service: ProductService, private router: Router) {

  }

  saveProduct() {
    this.service.createProduct(this.productRequest).subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      }
    });
  }
}
