import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FclComponent } from './fcl.component';
import { ByCustomerComponent } from './by-customer/by-customer.component';
import { ByZoneComponent } from './by-zone/by-zone.component';
import { ByStatusComponent } from './by-status/by-status.component';
import { MasterComponent } from './master/master.component';
import { SharedInOrdersModule } from '../shared-in-orders/shared-in-orders.module';

import { MainZonePieComponent } from './by-zone/main-zone-pie/main-zone-pie.component';
import { MainStatusPieComponent } from './by-status/main-status-pie/main-status-pie.component';

export const routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component:ByCustomerComponent,loadChildren: './by-customer/by-customer.module#ByCustomerModule', data : { breadcrumb : 'Customer'} },
  { path: 'zone',component:ByZoneComponent, data : { breadcrumb : 'Zone'} },
  { path: 'status',component:ByStatusComponent, data : { breadcrumb : 'Status'} }
];

@NgModule({
  declarations: [ByCustomerComponent, ByZoneComponent, ByStatusComponent, MasterComponent, MainZonePieComponent, MainStatusPieComponent],
  imports: [
    CommonModule,NgxChartsModule,SharedInOrdersModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class FclModule { }
