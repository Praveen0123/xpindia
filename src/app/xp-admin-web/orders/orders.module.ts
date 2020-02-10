import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OrdersComponent } from './orders.component';
import { CustomerPieComponent } from './customer-pie/customer-pie.component';
import { ZonePieComponent } from './zone-pie/zone-pie.component';
import { StatusPieComponent } from './status-pie/status-pie.component';
import { ByZonePieInternalComponent } from './internal-pie-charts/by-zone-pie-internal/by-zone-pie-internal.component';
import { ConfirmedPieInternalComponent } from './internal-pie-charts/confirmed-pie-internal/confirmed-pie-internal.component';
import { AllocatedPieInternalComponent } from './internal-pie-charts/allocated-pie-internal/allocated-pie-internal.component';
import { PlacedPieInternalComponent } from './internal-pie-charts/placed-pie-internal/placed-pie-internal.component';
import { LoadedPieInternalComponent } from './internal-pie-charts/loaded-pie-internal/loaded-pie-internal.component';
import { TripStartedPieInternalComponent } from './internal-pie-charts/trip-started-pie-internal/trip-started-pie-internal.component';
import { OrdersInternalScreenComponent } from './orders-internal-screen/orders-internal-screen.component';
import { OrdersMainScreenComponent } from './orders-main-screen/orders-main-screen.component';
import { XpcnDocumentsDialogComponent } from './orders-main-screen/xpcn-documents-dialog/xpcn-documents-dialog.component';
import { FclComponent } from './fcl/fcl.component';
import { ExpressComponent } from './express/express.component';
import { BespokeComponent } from './bespoke/bespoke.component';
import { SharedInOrdersModule } from './shared-in-orders/shared-in-orders.module';

export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl',component:FclComponent,loadChildren: './fcl/fcl.module#FclModule', data : { breadcrumb : 'FCL'} },
  { path: 'express',component:ExpressComponent,loadChildren: './express/express.module#ExpressModule', data : { breadcrumb : 'Express'} },
  { path: 'bespoke',component:BespokeComponent,loadChildren: './bespoke/bespoke.module#BespokeModule', data : { breadcrumb : 'Bespoke'} },
  
];

@NgModule({
  declarations: [FclComponent, ExpressComponent, BespokeComponent, OrdersComponent, CustomerPieComponent, ZonePieComponent, StatusPieComponent, ByZonePieInternalComponent, ConfirmedPieInternalComponent, AllocatedPieInternalComponent, PlacedPieInternalComponent, LoadedPieInternalComponent, TripStartedPieInternalComponent, OrdersInternalScreenComponent, OrdersMainScreenComponent, XpcnDocumentsDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,SharedInOrdersModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[XpcnDocumentsDialogComponent]
})
export class OrdersModule { }
