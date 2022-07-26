import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, SharedModule],
  exports: [SharedModule],
  declarations: [],
})
export class UiAngularModule {}
