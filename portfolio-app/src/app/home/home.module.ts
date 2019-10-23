import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    HomeComponent,
  ],
  exports: [HomeComponent]
})
export class HomeModule {}

