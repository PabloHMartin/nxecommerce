import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
