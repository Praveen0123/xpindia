import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SharedModule } from '../shared/shared.module';
import { FleetDashboardComponent } from './fleet-dashboard.component';
import { FleetLinechartComponent } from './fleet-linechart/fleet-linechart.component';
import { Google1MapsComponent } from './fleet-google1-maps/google1-maps.component';
import { Google2MapsComponent } from './fleet-google2-maps/google2-maps.component';

export const routes = [
  { path: '', component: FleetDashboardComponent, pathMatch: 'full', data: { breadcrumb: 'Dashboard' } }
];

@NgModule({
  declarations: [
    FleetDashboardComponent,
    FleetLinechartComponent,
    Google1MapsComponent,
    Google2MapsComponent
  ],
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
    AgmCoreModule,
  ],
  providers: [GoogleMapsAPIWrapper]
})
export class FleetDashboardModule { }
