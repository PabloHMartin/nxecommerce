import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAngularModule } from '@ecommerce/ui-angular';

const modules = [CommonModule, UiAngularModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
