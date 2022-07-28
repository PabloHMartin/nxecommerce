import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [CatalogComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
