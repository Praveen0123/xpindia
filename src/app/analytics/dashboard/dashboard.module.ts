import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
import { PieeeComponent } from './pieee/pieee.component';
import { PieeeeComponent } from './pieeee/pieeee.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} }
];

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    TrendChartComponent,
    PieComponent,
    PieeComponent,
    PieeeComponent,
    PieeeeComponent,
    GoogleMapsComponent,
    GoogleeMapsComponent,
  ]
})
export class DashboardModule { }