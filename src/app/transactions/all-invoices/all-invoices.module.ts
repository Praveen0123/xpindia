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
import { AllInvoicesComponent } from './all-invoices.component';
import { PayablesComponent } from './payables/payables.component';
import { AgeinganalysisComponent } from './ageinganalysis/ageinganalysis.component';
import { PaymentsLogComponent } from './payments-log/payments-log.component';
import { MasterComponent } from './master/master.component';
import { PieComponent } from './pie/pie.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Pie2Component } from './pie2/pie2.component';

import { AddPaymentComponent } from './payables/add-payment/add-payment.component';
import { AddVendorPaymentComponent } from './payables/add-vendor-payment/add-vendor-payment.component';
const route: Routes = [
  { path: '', redirectTo: 'payables', pathMatch: 'full' },
  { path: 'ageingAnalysis', component: AgeinganalysisComponent, data: { breadcrumb: 'Ageing Analysis' } },
  { path: 'payables', component: PayablesComponent, data: { breadcrumb: 'Payables' } },
  { path: 'paymentsLog', component: PaymentsLogComponent, data: { breadcrumb: 'Payments Log' } },
]

@NgModule({
  declarations: [PayablesComponent, AgeinganalysisComponent, PaymentsLogComponent, MasterComponent, PieComponent, LineGraphComponent, Pie2Component, AddPaymentComponent, AddVendorPaymentComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddPaymentComponent,AddVendorPaymentComponent],
  
})
export class AllInvoicesModule { }
