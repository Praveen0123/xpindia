import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { BbComponent } from './bb/bb.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MasterInOrdersComponent } from './master-in-orders/master-in-orders.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from '../../shared/shared.module';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { BbDetailsComponent } from './bb-details/bb-details.component';
import { LclDetailsComponent } from './lcl-details/lcl-details.component';
import { NetworkComponent } from './fcl/network/network.component';
import { TrackingComponent } from './fcl/tracking/tracking.component';
import { AddTripComponent } from './fcl/network/add-trip/add-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PacagedescriptionComponent } from './fcl/pacagedescription/pacagedescription.component';
import { PackageDetailComponent } from './fcl/pacagedescription/package-detail/package-detail.component';

export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl', component: FclComponent, data : { breadcrumb : 'FCL Orders'} },
  { path: 'lcl', component: LclComponent, data : { breadcrumb : 'LCL Orders'} },
  { path: 'bb', component: BbComponent, data : { breadcrumb : 'BB Orders'} },
  { path: 'lcldetails', component: LclDetailsComponent, data : { breadcrumb : 'LCL Details for Reference Number 10214548'} },
  { path: 'bbdetails', component: BbDetailsComponent, data : { breadcrumb : 'BB Details for Order ID 10214548'} },
  { path: 'maps', component: GoogleMapsComponent, data : { breadcrumb : 'Maps'} },
  { path: 'tracking', component: TrackingComponent, data : { breadcrumb : 'Tracking'} },
  { path: 'network', component: NetworkComponent, data : { breadcrumb : 'Network'} },
  { path: 'packages', component: PacagedescriptionComponent, data : { breadcrumb : 'Package Details for Order ID 101247'} },
  
];

@NgModule({
  declarations: [FclComponent, LclComponent, BbComponent, MasterInOrdersComponent, LineGraphComponent, PieChartComponent, GoogleMapsComponent, BbDetailsComponent, LclDetailsComponent, NetworkComponent, TrackingComponent, AddTripComponent, PacagedescriptionComponent, PackageDetailComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),AgmCoreModule,NgxChartsModule,ConfirmationPopoverModule,SharedModule,FormsModule,ReactiveFormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[AddTripComponent,PackageDetailComponent],
  providers:[AlertService]
})
export class OrdersModule { }
