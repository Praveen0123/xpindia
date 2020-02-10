import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
// import { BillsComponent } from './bills.component';
// import { Route } from '@angular/compiler/src/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { InvoicesComponent } from './invoices.component';
import { PayablesComponent } from './payables/payables.component';
import { PaymentLogComponent } from './payment-log/payment-log.component';
import { AgeingAnalysisComponent } from './ageing-analysis/ageing-analysis.component';
import { MasterComponent } from './master/master.component';
import { AddPaymentComponent } from './payables/add-payment/add-payment.component';
import { AddVendorPaymentComponent } from './payables/add-vendor-payment/add-vendor-payment.component';
import { PieComponent } from './pie/pie.component';
import { Pie2Component } from './pie2/pie2.component';
import { AlertService } from '../../../shared/services/alert.service';
import { PayableComponent } from './payables/payable/payable.component';
import { UpcomingPayableComponent } from './upcoming-payable/upcoming-payable.component';
import { OverduePayableComponent } from './overdue-payable/overdue-payable.component';
import { StatusOverviewComponent } from './status-overview/status-overview.component';

const route: Routes = [
  { path: '', redirectTo: 'bills', pathMatch: 'full' },
  // { path: 'payables', component: PayablesComponent,loadChildren:"./payables/payabless.module#PayablessModule",data: { breadcrumb: 'Payables' } },
  { path: 'paymentslog', component: PaymentLogComponent, data: { breadcrumb: 'Payments Log' } },
  { path: 'bills', component: PayableComponent, data: { breadcrumb: 'Bills' } },
  { path: 'ageinganalysis', component: AgeingAnalysisComponent, data: { breadcrumb: 'Ageing Analysis' } },

]

@NgModule({
  declarations: [PaymentLogComponent, AgeingAnalysisComponent, PieComponent, Pie2Component, PayableComponent, PayablesComponent, MasterComponent, AddPaymentComponent, AddVendorPaymentComponent, UpcomingPayableComponent, OverduePayableComponent, StatusOverviewComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule, OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule, ConfirmationPopoverModule
  ],
  providers: [AlertService],
  entryComponents: [AddPaymentComponent, AddVendorPaymentComponent],
  schemas: [ UpcomingPayableComponent, OverduePayableComponent, StatusOverviewComponent]
})
export class InvoicesModule { }
