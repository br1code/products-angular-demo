import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {name: 'Pepsi 3L', description: 'Bottle of Pepsi 3L', price: 50},
      {name: 'Cocacola 3L', description: 'Bottle of Cocacola 3L', price: 60},
      {name: 'Fanta 1.5L', description: 'Bottle of Fanta 1.5L', price: 30},
      {name: 'Sprite 3L', description: 'Bottle of Sprite 3L', price: 45},
      {name: 'Fernet 1L', description: 'Bottle of Fernet 1L', price: 100}
    ];
  }
}
