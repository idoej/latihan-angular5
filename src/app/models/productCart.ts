import {Product} from './product';

export interface ProductCart {
  product: Product;
  amount: number;
  total: number;
}
