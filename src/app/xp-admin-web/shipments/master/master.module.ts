import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[MasterComponent]
})
export class MasterModule { }
