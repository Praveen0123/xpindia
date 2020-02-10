import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { NgxChartsModule } from '@swimlane/ngx-charts';


export const routes = [
  // { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '', component: CustomerComponent, data : { breadcrumb : 'Customers'} },
  // { path: 'staff',component:StaffComponent, data : { breadcrumb : 'Staff'} },
  
  
];


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule,
  ],
  providers:[AlertService],
  entryComponents:[],

})
export class CustomerModule { }
