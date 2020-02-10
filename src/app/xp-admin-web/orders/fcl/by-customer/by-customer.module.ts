import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../../shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedInOrdersModule } from '../../shared-in-orders/shared-in-orders.module';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { SpecificCustomerComponent } from './specific-customer/specific-customer.component';
import { MainCustomerPieComponent } from './main-customer-pie/main-customer-pie.component';
import { MergedPieViewComponent } from './merged-pie-view/merged-pie-view.component';

export const routes = [
  { path: '', redirectTo: 'allcustomers', pathMatch: 'full' },
  { path: 'allcustomers', component:AllCustomersComponent, data : { breadcrumb : 'All Customer'} },
  { path: 'customer/:name',component:SpecificCustomerComponent, data : { breadcrumb : 'Order Details for Customer Shopkart'} },
  // { path: 'status',component:ByStatusComponent, data : { breadcrumb : 'Status'} }
];

@NgModule({
  declarations: [MainCustomerPieComponent,AllCustomersComponent, SpecificCustomerComponent, MergedPieViewComponent],
  imports: [
    CommonModule,NgxChartsModule,SharedInOrdersModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ByCustomerModule { }
