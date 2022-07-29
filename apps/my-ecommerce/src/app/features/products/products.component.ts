import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '@ecommerce/redux';

@Component({
  selector: 'ecommerce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  cartCount$ = this.productsSrv.cartCount$;

  constructor(private productsSrv: ProductsFacade) {}
  ngOnInit(): void {
    this.productsSrv.init();
  }
}
