import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FieldFilterComponent } from './field-filter/field-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, SharedModule],
  declarations: [HeaderComponent, FieldFilterComponent, ProductCardComponent],
})
export class UiAngularModule {}
