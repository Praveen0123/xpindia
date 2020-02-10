import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { RatesComponent } from './rates.component';
import { FclComponent } from './fcl/fcl.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { MasterComponent } from './master/master.component';
import { ContractsComponent } from './contracts/contracts.component'
import { AddContractsComponent } from './contracts/add-contracts/add-contracts.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

export const routes = [
  { path: '', redirectTo: 'shipment', pathMatch: 'full' },
  { path: 'fcl', component: FclComponent, data: { breadcrumb: 'FCL Rates' } },
  { path: 'shipment', component: ShipmentComponent, data: { breadcrumb: 'Shipment Rates' } },
  { path: 'Contracts', component: ContractsComponent, data: { breadcrumb: 'Contracts' } },
];

@NgModule({
  declarations: [RatesComponent, FclComponent, ShipmentComponent, MasterComponent, ContractsComponent,AddContractsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule, ConfirmationPopoverModule
  ],
  entryComponents: [AddContractsComponent],
  providers: [AlertService]
})
export class RatesModule { }
