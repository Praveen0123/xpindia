import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {ShipmentsComponent} from './shipments.component';
import { TripsComponent } from './trips/trips.component';
import { LclComponent } from './lcl/lcl.component';
import { BbComponent } from './bb/bb.component';
import { MasterModule } from './master/master.module';
import { BookingComponent } from './booking/booking.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FclComponent } from './fcl/fcl.component'


// export const routes = [
//   { path: '', pathMatch: 'full',component: ShipmentsComponent, data : { breadcrumb : 'FCL Orders'} },
// ];

export const routes = [
  { path: '', redirectTo:'fcl', pathMatch: 'full'},
  // { path: 'trips', component: TripsComponent, data: { breadcrumb: 'Trips' }},
  { path: 'lcl', loadChildren: './lcl/lcl.module#LclModule',  data: { breadcrumb: 'LCL' }},
  { path: 'bb', component: BbComponent, data: { breadcrumb: 'Bespoke' }},
  // { path: 'fcl', loadChildren: './fcl/fcl.module#FclModule', data: { breadcrumb: 'FCL' }},
  { path: 'delivery', component: DeliveryComponent, data: { breadcrumb: 'Delivery' }},
  { path: 'booking', component: BookingComponent, data: { breadcrumb: 'Booking' }},
];
@NgModule({
  declarations: [ShipmentsComponent, TripsComponent, LclComponent, BbComponent, BookingComponent, DeliveryComponent, FclComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    MasterModule
  ],
  providers:[AlertService]
})
export class ShipmentsModule { }
