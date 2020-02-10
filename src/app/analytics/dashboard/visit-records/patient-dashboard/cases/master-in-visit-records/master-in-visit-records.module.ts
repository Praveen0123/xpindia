import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../../shared/shared.module';
import { MasterInVisitRecordsComponent } from '../master-in-visit-records/master-in-visit-records.component';

@NgModule({
  declarations: [MasterInVisitRecordsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[MasterInVisitRecordsComponent]
})
export class MasterInVisitRecordsModule { }
