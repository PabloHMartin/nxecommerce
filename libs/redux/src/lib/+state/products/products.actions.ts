import { Product } from '@ecommerce/data';
import { createAction, props } from '@ngrx/store';
import { ProductsEntity } from './products.models';

export const initProducts = createAction('[Products Page] Init');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

export const addProductToCart = createAction(
  '[Products Page] add product To Car',
  props<{ product: Product }>()
);
