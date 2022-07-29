import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@ecommerce/data';
@Component({
  selector: 'ecommerce-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
