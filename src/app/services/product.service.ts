import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../helper';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list(page: number, category: string) {
    let parameters = new HttpParams()
      .append('_limit', '9')
      .append('_page', page.toString());
    if (category) {
      parameters = parameters.append('category', category);
    }
    return this.http.get<Product[]>(BASE_URL + '/products', {
      params: parameters
    });
  }
}
