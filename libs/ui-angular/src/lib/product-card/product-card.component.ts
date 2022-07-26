import { Component, Input } from '@angular/core';
import { Product } from '../../../../assets/models/Product.model';
@Component({
  selector: 'ecommerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product!: Product;
}
