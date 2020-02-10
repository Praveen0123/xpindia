import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddTripComponent } from './orders/fcl/network/add-trip/add-trip.component';
import { OrdersModule } from './orders/orders.module';
import { TripsComponent } from './trips/trips.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

export const routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent, loadChildren:'./orders/orders.module#OrdersModule', data : { breadcrumb : 'Orders'} },
  { path: 'capacity', component: SchedulesComponent, data: { breadcrumb: 'Capacity'} },
  { path: 'trips',  component: TripsComponent,  data: { breadcrumb: 'Trips' }},
];

@NgModule({
  declarations: [OrdersComponent,SchedulesComponent,TripsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,OrdersModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddTripComponent]
})
export class OperationsModule { }
