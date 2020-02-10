import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInManageVisitsComponent } from './shared-in-manage-visits.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [SharedInManageVisitsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[SharedInManageVisitsComponent]
})
export class SharedInManageVisitsModule { }
