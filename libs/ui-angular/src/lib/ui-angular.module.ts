import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [SharedModule],
  declarations: [],
})
export class UiAngularModule {}
