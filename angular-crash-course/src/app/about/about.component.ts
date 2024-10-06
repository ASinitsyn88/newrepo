import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) {

  }

  param: any;
  queryParam: any;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    // Example of reading URL parameter: http://localhost:4200/about/Alex
    this.param = this.activatedRoute.snapshot.params['username'];
    // Example of reading URL query parameter: http://localhost:4200/about?course=spring
    this.queryParam = this.activatedRoute.snapshot.queryParams['course']

    // Post request example
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    }
    this.service.createProduct(product).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred:', error)
        } else {
          // server side error
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`);
        }
      }
    })

    // Get request example
    // this.service.getAllProductsWithLimit().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   }
    // })
  }
}
