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
import { AllBillsComponent } from './all-bills.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { AgeingAnalysisComponent } from './ageing-analysis/ageing-analysis.component';
import { PaymentsLogComponent } from './payments-log/payments-log.component';
import { MasterComponent } from './master/master.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PieChart1Component } from './pie-chart1/pie-chart1.component';
import { PieChart2Component } from './pie-chart2/pie-chart2.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AddPaymentsComponent } from './receivables/add-payments/add-payments.component';

const route: Routes = [
  { path: '', redirectTo: 'receivables', pathMatch: 'full' },
  { path: 'ageingAnalysis', component: AgeingAnalysisComponent, data: { breadcrumb: 'Ageing Analysis' } },
  { path: 'receivables', component: ReceivablesComponent, data: { breadcrumb: 'Receivables' } },
  { path: 'paymentsLog', component: PaymentsLogComponent, data: { breadcrumb: 'Payments Log' } },
]

@NgModule({
  declarations: [ReceivablesComponent, AgeingAnalysisComponent, PaymentsLogComponent, MasterComponent, PieChart1Component, PieChart2Component, AddPaymentsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,OwlDateTimeModule,OwlNativeDateTimeModule,NgxChartsModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddPaymentsComponent]
})
export class AllBillsModule { }
