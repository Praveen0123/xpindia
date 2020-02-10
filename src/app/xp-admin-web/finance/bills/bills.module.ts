import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
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
import { AgeingAnalysisComponent } from './ageing-analysis/ageing-analysis.component';
import { PaymentLogComponent } from './payment-log/payment-log.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { MasterComponent } from './master/master.component';
import { PieeComponent } from './piee/piee.component';
import { Piee2Component } from './piee2/piee2.component';
import { AddPaymentsComponent } from './receivables/add-payments/add-payments.component';
import { AlertService } from '../../../shared/services/alert.service';
import { ReceivableComponent } from './receivables/receivable/receivable.component';

const route: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  // { path: '', redirectTo: 'receivable', pathMatch: 'full' },
  { path: 'invoices', component: ReceivableComponent, data : { breadcrumb : 'Invoices'}},
  { path: 'paymentslog', component: PaymentLogComponent, data : { breadcrumb : 'Payments Log'} },
  { path: 'ageinganalysis', component: AgeingAnalysisComponent, data : { breadcrumb : 'Ageing Analysis'} },
 
]

@NgModule({
  declarations: [ReceivableComponent,AgeingAnalysisComponent,PaymentLogComponent,Piee2Component,PieeComponent,ReceivablesComponent, MasterComponent, AddPaymentsComponent],
  
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
  providers:[AlertService],
  entryComponents:[AddPaymentsComponent]
})
export class BillsModule { }
