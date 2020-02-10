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
import { CustomerLocationMasterComponent } from './customer-location-master.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { MasterComponent } from './master/master.component';
import { OriginsComponent } from './origins/origins.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddCustomerOriginComponent } from './origins/add-customer-origin/add-customer-origin.component';
import { AddCustomerDestinationComponent } from './destinations/add-customer-destination/add-customer-destination.component';
import { LanesComponent } from './lanes/lanes.component';
import { GoogleMapComponent } from './origins/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';

export const routes = [
  { path: '', redirectTo: 'origins', pathMatch: 'full' },
  { path: 'origins', component: OriginsComponent, data: { breadcrumb: 'Origins' } },
  { path: 'destinations', component: DestinationsComponent, data: { breadcrumb: 'Destinations' } },
  { path: 'lanes', component: LanesComponent, data: { breadcrumb: 'Lanes' } },
  { path: 'maps', component: GoogleMapComponent, data: { breadcrumb: 'Maps' } },
];

@NgModule({
  declarations: [CustomerLocationMasterComponent, AddLocationComponent, MasterComponent, OriginsComponent, DestinationsComponent, AddCustomerOriginComponent, AddCustomerDestinationComponent, LanesComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,AgmCoreModule
  ],
  entryComponents:[AddLocationComponent,AddCustomerOriginComponent,AddCustomerDestinationComponent],
  providers:[AlertService]
})
export class CustomerLocationMasterModule { }
