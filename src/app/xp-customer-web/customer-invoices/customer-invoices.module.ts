


import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { PayablesComponent } from './payables/payables.component';
import { AgeinganalysisComponent } from './ageinganalysis/ageinganalysis.component';
import { PaymentsLogComponent } from './payments-log/payments-log.component';
import { MasterComponent } from './master/master.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PieComponent } from './pie/pie.component';
import { Pie2Component } from './pie2/pie2.component';
import {AddPaymentComponent} from './payables/add-payment/add-payment.component';

import { AddVendorPaymentComponent } from './payables/add-vendor-payment/add-vendor-payment.component';
import {CustomerInvoicesComponent} from './customer-invoices.component';
import { AccountPayablesComponent } from './account-payables/account-payables.component';


export const routes = [
  { path: '', redirectTo: 'AccountPayables', pathMatch: 'full' },
  { path: 'AccountPayables', component: AccountPayablesComponent, data: { breadcrumb: 'Account Payables' } },
  { path: 'payables', component: PayablesComponent, data: { breadcrumb: 'Payables' } },
  { path: 'paymentsLog', component: PaymentsLogComponent ,data: { breadcrumb: 'Payments Log' } },
]


@NgModule({
  declarations: [ MasterComponent, PayablesComponent,CustomerInvoicesComponent, PaymentsLogComponent, AgeinganalysisComponent, PieComponent, Pie2Component, AddVendorPaymentComponent,AddPaymentComponent, AccountPayablesComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddPaymentComponent,AddVendorPaymentComponent],
  providers:[AlertService]
})
export class CustomerInvoicesModule { }
