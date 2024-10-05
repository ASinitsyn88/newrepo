import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";

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

    this.service.getAllProductsWithLimit().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
