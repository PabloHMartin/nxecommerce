import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '@ecommerce/data';
import { ProductsFacade } from '@ecommerce/redux';

@Component({
  selector: 'ecommerce-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  loaded$ = this.productsSrv.loaded$;
  products$ = this.productsSrv.allProducts$;

  constructor(public productsSrv: ProductsFacade) {}

  addProductToCart(product: Product) {
    this.productsSrv.addProductToCart(product);
  }
}
