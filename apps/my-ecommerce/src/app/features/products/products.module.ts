import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ReduxModule } from '@ecommerce/redux';

@NgModule({
  declarations: [CatalogComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, ReduxModule],
})
export class ProductsModule {}
