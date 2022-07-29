import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
  cart?: ProductsEntity[];
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
    cart: [],
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProductsActions.addProductToCart, (state, action) => ({
    ...state,
    cart: [...(state.cart || []), action.product],
  }))
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
