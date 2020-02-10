import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { LanesComponent } from './lanes/lanes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { FleetComponent } from './fleet.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DragulaService } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AlertService } from '../shared/services/alert.service';
// import { MastercampaignComponent } from './mastercampaign/mastercampaign.component';

import { QuillModule } from 'ngx-quill';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'angular-highcharts';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import {MapviewComponent} from './mapview/mapview.component';

import { AgmCoreModule } from '@agm/core';
import {AddDriverDialogComponent} from './driver/add-driver-dialog/add-driver-dialog.component';
import { AddTruckDialogComponent } from './trucks/add-truck-dialog/add-truck-dialog.component'

export const routes = [
  { path: '', redirectTo: 'driver', pathMatch: 'full' },
  { path: 'driver', component: DriverComponent, pathMatch: 'full', data : { breadcrumb : 'Driver'} },
  { path: 'lanes', component:LanesComponent, pathMatch: 'full', data: { breadcrumb: 'Lanes'} },
  { path: 'trucks', component:TrucksComponent, pathMatch: 'full', data: { breadcrumb: 'Trucks Information'} },
];

@NgModule({
  declarations: [DriverComponent, LanesComponent, TrucksComponent, FleetComponent,AddDriverDialogComponent, AddTruckDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule, AgmCoreModule,
    PipesModule, ConfirmationPopoverModule, QuillModule, 
  ],
  providers: [SharedModule, AlertService, DragulaService],

  entryComponents:[AddDriverDialogComponent,AddTruckDialogComponent]
})
export class FleetModule { }
