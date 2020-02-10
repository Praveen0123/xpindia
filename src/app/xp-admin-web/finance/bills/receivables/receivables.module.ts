import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeingAnalysisComponent } from '../ageing-analysis/ageing-analysis.component';
import { PaymentLogComponent } from '../payment-log/payment-log.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReceivableComponent } from './receivable/receivable.component';
import { Piee2Component } from '../piee2/piee2.component';
import { PieeComponent } from '../piee/piee.component';

const route: Routes = [
  { path: '', redirectTo: 'receivable', pathMatch: 'full' },
  { path: 'receivable', component: ReceivableComponent, data : { breadcrumb : 'Receivables'}},
  { path: 'paymentslog', component: PaymentLogComponent, data : { breadcrumb : 'Payments Log'} },
  { path: 'ageinganalysis', component: AgeingAnalysisComponent, data : { breadcrumb : 'Ageing Analysis'} },
]


@NgModule({
  declarations: [],
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
  ]
})
export class ReceivablesModule { }
