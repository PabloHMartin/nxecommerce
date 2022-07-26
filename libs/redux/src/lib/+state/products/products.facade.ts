import { Injectable } from '@angular/core';
import { Product } from '@ecommerce/data';
import { select, Store, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';
import * as ProductsSelectors from './products.selectors';

@Injectable()
export class ProductsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ProductsSelectors.getProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelectors.getAllProducts));
  selectedProducts$ = this.store.pipe(select(ProductsSelectors.getSelected));
  cartCount$ = this.store.pipe(select(ProductsSelectors.getCountCart));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ProductsActions.initProducts());
  }
  addProductToCart(product: Product): void {
    this.store.dispatch(ProductsActions.addProductToCart({ product }));
  }
}
