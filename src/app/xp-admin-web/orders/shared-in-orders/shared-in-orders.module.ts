import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInOrdersComponent } from './shared-in-orders.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SharedInOrdersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[SharedInOrdersComponent]
})
export class SharedInOrdersModule { }
