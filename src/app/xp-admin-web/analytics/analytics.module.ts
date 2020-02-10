
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from '../analytics/analytics.component'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TreeModule } from 'primeng/primeng';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { AlertPromise } from 'selenium-webdriver';
import { AlertService } from '../../shared/services/alert.service';
import { TextMaskModule } from 'angular2-text-mask';
import { QuillModule } from 'ngx-quill';

import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { CustomerChartComponent } from './customer-chart/customer-chart.component';
import { OrdersChartComponent } from './orders-chart/orders-chart.component';
import { FFVsChartComponent } from './ffvs-chart/ffvs-chart.component';
import { ServiceLevelChartComponent } from './service-level-chart/service-level-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
export const routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AnalyticsComponent, data: { breadcrumb: 'Analytics' } },
  // { path: 'manageorders', component: ManageOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Orders'} },
  // { path: 'scheduling', component: SchedulingComponent,pathMatch: 'full', data : { breadcrumb : 'Schedule'} },


];

@NgModule({
  declarations: [AnalyticsComponent, CustomerChartComponent, OrdersChartComponent, FFVsChartComponent, ServiceLevelChartComponent],
  imports: [
    CommonModule, NgxChartsModule, OwlDateTimeModule, OwlNativeDateTimeModule, FormsModule, SharedModule, ConfirmationPopoverModule, OwlDateTimeModule, OwlNativeDateTimeModule, TextMaskModule,
    RouterModule.forChild(routes), ReactiveFormsModule, TreeModule, QuillModule, PipesModule, HighchartsChartModule, ChartModule

  ],
  providers: [AlertService],
})
export class AnalyticsModule { }








