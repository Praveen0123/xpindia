import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { PaymentLogComponent } from '../payment-log/payment-log.component';
import { AgeingAnalysisComponent } from '../ageing-analysis/ageing-analysis.component';
import { PieComponent } from '../pie/pie.component';
import { Pie2Component } from '../pie2/pie2.component';
import { PayableComponent } from './payable/payable.component';

const route: Routes = [
  { path: '', redirectTo: 'payable', pathMatch: 'full' },
  { path: 'payable', component: PayableComponent, data : { breadcrumb : 'Payables'}},
  { path: 'paymentslog', component: PaymentLogComponent, data : { breadcrumb : 'Payments Log'} },
  { path: 'ageinganalysis', component: AgeingAnalysisComponent, data : { breadcrumb : 'Ageing Analysis'}},
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
export class PayablessModule { }
