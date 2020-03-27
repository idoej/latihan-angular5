import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {CookieService} from 'ngx-cookie-service';
import {ProductCart} from '../../../models/productCart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  page = 1;
  next = false;
  category = '';
  cart: ProductCart[] = [];
  total = 0;

  constructor(private productService: ProductService, private cookie: CookieService) {
  }

  ngOnInit(): void {
    if (this.cookie.check('category')) {
      this.category = this.cookie.get('category');
    }
    this.fetchData();
  }

  fetchData(): void {
    this.productService.list(this.page, this.category).subscribe(data => {
      this.products = data;
      if (this.next && this.products.length === 0 && this.page > 1) { // retry with previous page
        this.page--;
        this.fetchData();
      }
      this.next = false;
    });
  }

  changeCategory(cat?: string) {
    this.category = cat;
    this.cookie.set('category', this.category);
    this.fetchData();
  }


  nextPage() {
    this.page++; // json server does not have count endpoint, so...whatever
    this.next = true;
    this.fetchData();
  }

  prevPage() {
    this.page = Math.max(1, this.page - 1);
    this.fetchData();
  }

  addToCart(id: number) {
    const idx = this.products.findIndex(value => value.id === id);
    const productToBeAdd = this.products[idx];
    const cartIndex = this.cart.findIndex(c => c.product.id === productToBeAdd.id);
    let productCart: ProductCart;
    if (cartIndex !== -1) {
      productCart = this.cart[cartIndex];
      productCart.amount++;
      productCart.total += productToBeAdd.price;
    } else {
      productCart = {
        product: productToBeAdd,
        total: productToBeAdd.price,
        amount: 1
      };
      this.cart.push(productCart);
    }
    // update total
    this.total += productToBeAdd.price;
  }

  remove(id: number) {
    const cartIndex = this.cart.findIndex(c => c.product.id === id);
    if (cartIndex !== -1) {
      this.delete(cartIndex);
    }
  }

  delete(cartIndex: number) {
    this.total -= this.cart[cartIndex].total;
    this.cart.splice(cartIndex, 1);
  }

  decrease(id: number) {
    const cartIndex = this.cart.findIndex(c => c.product.id === id);
    if (cartIndex !== -1) {
      if (this.cart[cartIndex].amount === 1) {
        this.delete(cartIndex);
      } else {
        this.total -= this.cart[cartIndex].product.price;
        this.cart[cartIndex].amount--;
        this.cart[cartIndex].total -= this.cart[cartIndex].product.price;
      }
    }
  }

  increase(id: number) {
    const cartIndex = this.cart.findIndex(c => c.product.id === id);
    if (cartIndex !== -1) {
      this.cart[cartIndex].amount++;
      this.cart[cartIndex].total += this.cart[cartIndex].product.price;
      this.total += this.cart[cartIndex].product.price;
    }
  }
}
