import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BookingComponent } from './booking/booking.component';
import { InTransitComponent } from './in-transit/in-transit.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MasterInFclComponent } from './master-in-fcl/master-in-fcl.component';
import { MasterModule } from '../master/master.module';

const route: Routes = [
  { path: '', redirectTo: 'bookings', pathMatch: 'full' },
  { path: 'bookings', component: BookingComponent, data: { breadcrumb: 'Bookings' } },
  { path: 'intransit', component: InTransitComponent, data: { breadcrumb: 'In-Transit' } },
  { path: 'delivery', component: DeliveryComponent, data: { breadcrumb: 'Delivery' } },
]

@NgModule({
  declarations: [BookingComponent, InTransitComponent, DeliveryComponent, MasterInFclComponent],
  imports: [
    CommonModule,
    MasterModule,
    // HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,AgmCoreModule,
    // NgxPaginationModule,
    SharedModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    // PipesModule,
    ConfirmationPopoverModule
  ]
})
export class FclModule { }
