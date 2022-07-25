import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, SharedModule],
  declarations: [HeaderComponent],
})
export class UiAngularModule {}
