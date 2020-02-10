import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TripsComponent } from './trips/trips.component';
import { AddOrderReferenceComponent } from './trips/add-order-reference/add-order-reference.component';

export const routes = [
  { path: '', component: TripsComponent, data: { breadcrumb: 'Operations' } },
  // { path: '', component: OperationsComponent, data : { breadcrumb : 'Operations'} },
   { path: 'operations'},
  
  
];

@NgModule({
  declarations: [OperationsComponent, TripsComponent, AddOrderReferenceComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule,
  ],
  providers:[AlertService],
  entryComponents:[AddOrderReferenceComponent],

})
export class OperationsModule { }
