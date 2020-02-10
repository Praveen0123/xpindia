import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
import { RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Pie3Component } from './pie3/pie3.component';
import { Pie4Component } from './pie4/pie4.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

export const routes = [
  { path: '', component: CustomerDashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} },
  // { path: 'maps', component: GoogleMapsComponent, data : { breadcrumb : 'Maps'} },
];

@NgModule({
  declarations: [CustomerDashboardComponent, PieComponent, PieeComponent, GoogleMapsComponent, GoogleeMapsComponent, AnalyticsComponent, Pie3Component, Pie4Component],
  imports: [
    CommonModule,OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule,SharedModule,NgxChartsModule,PerfectScrollbarModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class CustomerDashboardModule { }
