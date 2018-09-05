import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  totalProducts: Product[];
  products: Product[];
  newProduct: Product = new Product();
  @ViewChild("myForm") form: any;

  constructor(private readonly productsService: ProductsService) {}

  set productFilter(value: string) {
    this.products = value ? this.filterProducts(value) : this.totalProducts;
  }
  
  filterProducts(filterBy: string){
    return this.totalProducts.filter(p => p.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  }

  addProduct() {
    if (this.form.valid) {
      let p = this.newProduct;
      let product = new Product(p.name, p.description, p.price > 0 ? p.price : 1);
      this.totalProducts.push(product);
      this.form.reset();
    }
  }

  ngOnInit() {
    this.totalProducts = this.productsService.getProducts();
    this.products = this.totalProducts;
  }
}
