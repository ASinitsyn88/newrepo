import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductRepresentation } from "../models/product-representation";
import { ProductRequest } from "../models/product-request";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {

  }

  getAllProductsWithLimit(limit = 5) {
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRequest) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
