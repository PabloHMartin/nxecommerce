import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '@ecommerce/redux';

@Component({
  selector: 'ecommerce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsSrv: ProductsFacade) {}
  ngOnInit(): void {
    this.productsSrv.init();
  }
}
