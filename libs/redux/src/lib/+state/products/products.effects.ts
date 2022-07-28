import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { exhaustMap, map } from 'rxjs';
import { DbService } from '../../services/db.service';

import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      fetch({
        run: (action) => {
          return this.db.getAllProducts().pipe(
            map((response) => {
              return ProductsActions.loadProductsSuccess({
                products: response,
              });
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private db: DbService) {}
}
