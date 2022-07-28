import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from '../header/header.component';
import { FieldFilterComponent } from '../field-filter/field-filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';

const components = [
  HeaderComponent,
  FieldFilterComponent,
  ProductCardComponent,
];
const modules = [
  CommonModule,
  MatCardModule,
  MatBadgeModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
];
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
