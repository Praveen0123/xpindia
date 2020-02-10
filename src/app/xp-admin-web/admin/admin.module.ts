import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AdminComponent } from './admin.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { LanesComponent } from './lanes/lanes.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OffersComponent } from './offers/offers.component';
import { SettingsComponent } from './settings/settings.component';
import { LclRoutesComponent } from './lcl-routes/lcl-routes.component';
import { AddRoutesComponent } from './lcl-routes/add-routes/add-routes.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { AddVehicleTypeComponent } from './vehicle-types/add-vehicle-type/add-vehicle-type.component';
import { AddLaneComponent } from './lanes/add-lane/add-lane.component';
import { AddRatesComponent } from './lanes/add-lane/add-rates/add-rates.component';
// import { BdComponent } from './bd/bd.component';
import { KpiComponent } from './kpi/kpi.component';
import { ContractsComponent } from './contracts/contracts.component';
// import { FclcapacityComponent } from './fclcapacity/fclcapacity.component';
import { NetworkScheduleComponent } from './network-schedule/network-schedule.component';
import { LanesRatesComponent } from './lanes-rates/lanes-rates.component';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { AddKpiComponent } from './kpi/add-kpi/add-kpi.component';
import { AddContractsComponent } from './contracts/add-contracts/add-contracts.component';
import { AssociatesComponent } from './associates/associates.component';
// import { LclRoutesComponent } from './lcl-routes/lcl-routes.component';

export const routes = [
  { path: '', redirectTo: 'masterdata', pathMatch: 'full' },
  { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'routes',component:LclRoutesComponent, data : { breadcrumb : 'LCL Routes'} },
  { path: 'lanes', component: LanesComponent, data : { breadcrumb : 'Lanes'} },
  { path: 'vehicletype', component:VehicleTypesComponent, data: { breadcrumb: 'Vehicle Types'} },
  { path: 'offers', component: OffersComponent, data : { breadcrumb : 'Offers'} },
  { path: 'settings', component:SettingsComponent,data: { breadcrumb: 'Settings'} },
  { path: 'testimonials', component:TestimonialsComponent, data: { breadcrumb: 'Testimonials'} },
  { path: 'users',loadChildren: './users/users.module#UsersModule', data : { breadcrumb : ''} },
  { path: 'lanes-rates',component:LanesRatesComponent, loadChildren: './lanes-rates/lane-rates.module#LaneRatesModule', data : { breadcrumb : 'Lanes & Rates'} },
  // { path: 'bd', component: BdComponent, data : { breadcrumb : 'BD'} },
  { path: 'servicelevels', component:KpiComponent, data: { breadcrumb: 'Service Levels'} },
  { path: 'contracts', component: ContractsComponent, data : { breadcrumb : 'Contracts'} },
  // { path: 'fclCapacity', component:FclcapacityComponent,  data: { breadcrumb: 'FCL Capacity'} },
  { path: 'networkschedule', component: NetworkScheduleComponent, pathMatch: 'full', data : { breadcrumb : 'Network Schedule'} },
  { path: 'associates', component:AssociatesComponent,  data: { breadcrumb: 'Associates'} },
  // { path: 'offers', component:OffersComponent, pathMatch: 'full', data: { breadcrumb: 'Offers'} },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  // { path: 'settings', component: SettingsComponent, pathMatch: 'full', data : { breadcrumb : 'Settings'} },
  // { path: 'testimonials', component: TestimonalsComponent, pathMatch: 'full', data : { breadcrumb : 'Testimonials'} },
  // { path: 'routemaster', component: RouteMasterComponent, pathMatch: 'full', data : { breadcrumb : 'Route Master'} },
  
];

@NgModule({
  declarations: [LanesRatesComponent, AddRoutesComponent,LclRoutesComponent,AdminComponent,MasterDataComponent, LanesComponent, VehicleTypesComponent, TestimonialsComponent, OffersComponent, SettingsComponent, AddOfferComponent, AddVehicleTypeComponent, AddLaneComponent, AddRatesComponent, KpiComponent, ContractsComponent, NetworkScheduleComponent, AddKpiComponent, AddContractsComponent, AssociatesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,
    AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService],
  entryComponents:[AddRoutesComponent,AddOfferComponent,AddVehicleTypeComponent,AddLaneComponent,AddRatesComponent,AddKpiComponent,AddContractsComponent]
})
export class AdminModule { }
