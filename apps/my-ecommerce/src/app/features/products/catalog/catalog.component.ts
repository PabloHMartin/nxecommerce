import { Component } from '@angular/core';
import { ProductsFacade } from '@ecommerce/redux';

@Component({
  selector: 'ecommerce-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  loaded$ = this.productsSrv.loaded$;
  products$ = this.productsSrv.allProducts$;

  constructor(public productsSrv: ProductsFacade) {}
}
