import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MasterDataComponent } from './master-data.component';
import { MasterComponent } from './master/master.component';
import { PinCodesComponent } from './pin-codes/pin-codes.component';
import { LocationsComponent } from './locations/locations.component';
import { ZonesComponent } from './zones/zones.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { HubsComponent } from './hubs/hubs.component';
import { DistrictsComponent } from './districts/districts.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { AddpinCodesComponent } from './pin-codes/addpin-codes/addpin-codes.component';
import { AlertService } from '../../../shared/services/alert.service';
import {AddLocationComponent} from './locations/add-location/add-location.component';
import { AddZonesComponent } from './zones/add-zones/add-zones.component';
import { AddGatewayComponent } from './gateways/add-gateway/add-gateway.component';
import { AddHubsComponent } from './hubs/add-hubs/add-hubs.component';
import { AddStateComponent } from './state/add-state/add-state.component';
import { AddDistrictsComponent } from './districts/add-districts/add-districts.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { BranchOfficeComponent } from './branch-office/branch-office.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { RegionComponent } from './region/region.component';
import { AddRegionComponent } from './region/add-region/add-region.component';

const route: Routes = [
  { path: '', redirectTo: 'pincodes', pathMatch: 'full' },
  { path: 'countries', component: CountryComponent, data: { breadcrumb: 'Countries' } },
  { path: 'zones', component: ZonesComponent, data: { breadcrumb: 'Zones' } },
  { path: 'states', component: StateComponent, data: { breadcrumb: 'States' } },
  // { path: 'districtmaster', component: DistrictsComponent, data: { breadcrumb: 'District Master' } },
  { path: 'locations', component: LocationsComponent, data: { breadcrumb: 'Locations' } },
  { path: 'pincodes', component: PinCodesComponent, data: { breadcrumb: 'Post Codes' } },
  { path: 'districts', component: DistrictsComponent, data: { breadcrumb: 'Districts' } },
  { path: 'gateways', component: GatewaysComponent, data: { breadcrumb: 'Gateways' } },
  { path: 'hubs', component: HubsComponent, data: { breadcrumb: 'Hubs' } },
  { path: 'branchoffice', component: BranchOfficeComponent, data: { breadcrumb: 'Branch Office' } },
  { path: 'maps', component: GoogleMapsComponent, data : { breadcrumb : 'Maps'} },
  { path: 'region', component: RegionComponent, data : { breadcrumb : 'Regions'} },
]

@NgModule({
  declarations: [MasterComponent, PinCodesComponent, LocationsComponent, ZonesComponent, GatewaysComponent, HubsComponent, DistrictsComponent, StateComponent, CountryComponent, AddpinCodesComponent,AddLocationComponent, AddZonesComponent, AddGatewayComponent, AddHubsComponent, AddStateComponent, AddDistrictsComponent, AddCountryComponent, BranchOfficeComponent, GoogleMapsComponent, RegionComponent, AddRegionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,AgmCoreModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  providers:[AlertService],
  entryComponents:[AddpinCodesComponent,AddLocationComponent,AddZonesComponent,AddGatewayComponent,AddHubsComponent,AddStateComponent,AddDistrictsComponent,AddCountryComponent,AddRegionComponent]
})
export class MasterDataModule { }
