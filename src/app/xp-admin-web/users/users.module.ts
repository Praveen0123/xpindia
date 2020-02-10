import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { UsersComponent } from './users.component';
import { CustomersComponent } from './customers/customers.component';
import { StaffComponent } from './staff/staff.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { LineGraphComponent } from './customers/line-graph/line-graph.component';
import { PieChartComponent } from './customers/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { AddRatesComponent } from './customers/add-rates/add-rates.component';
import { AddLanesComponent } from './add-lanes/add-lanes.component';
import { LineGraph1Component } from './vendors/line-graph1/line-graph1.component';
import { PieChart1Component } from './vendors/pie-chart1/pie-chart1.component';
import { AddVendorComponent } from './vendors/add-vendor/add-vendor.component';
import { VehicleDetailsComponent } from './vendors/vehicle-details/vehicle-details.component';
import { AddZoneComponent } from './vendors/add-zone/add-zone.component';
import { GatewayComponent } from './vendors/gateway/gateway.component';
import { AddlanesComponent } from './vendors/addlanes/addlanes.component';
import { AddOriginComponent } from './customers/add-origin/add-origin.component';
import { AddDestinationComponent } from './customers/add-destination/add-destination.component';
import { LineGraph2Component } from './staff/line-graph2/line-graph2.component';
import { PieChart2Component } from './staff/pie-chart2/pie-chart2.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { RolePermissionsComponent } from './staff/role-permissions/role-permissions.component';
import { AddFCLRatesComponent } from './vendors/add-fclrates/add-fclrates.component';
import { AddLocalRatesComponent } from './vendors/add-local-rates/add-local-rates.component'
import { ContractsComponent } from './customers/contracts/contracts.component';
import { AddAnotherOriginComponent } from './customers/add-origin/add-another-origin/add-another-origin.component';
import { AddContractsComponent } from './customers/contracts/add-contracts/add-contracts.component';
import { AddExpressRatesComponent } from './customers/add-express-rates/add-express-rates.component';
import { AddModelExpressRatesComponent } from './customers/add-express-rates/add-model-express-rates/add-model-express-rates.component';
import { FCLratesCustomerComponent } from './customers/fclrates-customer/fclrates-customer.component';
import { AddFClMOdelRatesComponent } from './customers/fclrates-customer/add-fcl-model-rates/add-fcl-model-rates.component';
import { AddMOdelDestinationComponent } from './customers/add-destination/add-model-destination/add-model-destination.component'
import { DriversComponent } from './vendors/drivers/drivers.component';
import { AddDriverComponent } from './vendors/drivers/add-driver/add-driver.component';
import { VehiclesComponent } from './vendors/vehicles/vehicles.component';
import { AddVehicleComponent } from './vendors/vehicles/add-vehicle/add-vehicle.component';
import { RateDashboardComponent } from './vendors/rate-dashboard/rate-dashboard.component';
import { FCLRatesComponent } from './vendors/rate-dashboard/rate-dashboard-folders/fcl-rates/fcl-rates.component';
import { MonthlyRatesComponent } from './vendors/rate-dashboard/rate-dashboard-folders/monthly-rates/monthly-rates.component';
import { DailyRatesComponent } from './vendors/rate-dashboard/rate-dashboard-folders/daily-rates/daily-rates.component';
import { AddVendorsZonesComponent } from './vendors/add-vendors-zones/add-vendors-zones.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { OriginsComponent } from './customers/customer-dashboard/dashboard-folder/origins/origins.component';
import { DestinationsComponent } from './customers/customer-dashboard/dashboard-folder/destinations/destinations.component';
import { LanesComponent } from './customers/customer-dashboard/dashboard-folder/lanes/lanes.component';
import { FclRatesComponent } from './customers/customer-dashboard/dashboard-folder/fcl-rates/fcl-rates.component';
import { ExpressRatesComponent } from './customers/customer-dashboard/dashboard-folder/express-rates/express-rates.component';
import { AddOriginCustomerDashboardComponent } from './customers/customer-dashboard/dashboard-folder/origins/add-origin-customer-dashboard/add-origin-customer-dashboard.component';
import { AddDestinationCustomerDashboardComponent } from './customers/customer-dashboard/dashboard-folder/destinations/add-destination-customer-dashboard/add-destination-customer-dashboard.component';
import { AddFclRatesCustomerDashboardComponent } from './customers/customer-dashboard/dashboard-folder/fcl-rates/add-fcl-rates-customer-dashboard/add-fcl-rates-customer-dashboard.component';
import { AddExpressRatesCustomerDashboardComponent } from './customers/customer-dashboard/dashboard-folder/express-rates/add-express-rates-customer-dashboard/add-express-rates-customer-dashboard.component';
import { ZonesInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/zones-in-dashboard/zones-in-dashboard.component';
import { LanesInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/lanes-in-dashboard/lanes-in-dashboard.component';
import { GatewaysInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/gateways-in-dashboard/gateways-in-dashboard.component';
import { VehiclesInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/vehicles-in-dashboard/vehicles-in-dashboard.component';
import { DriversInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/drivers-in-dashboard/drivers-in-dashboard.component';
import { AddVehicleInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/vehicles-in-dashboard/add-vehicle-in-dashboard/add-vehicle-in-dashboard.component';
import { AddDriverInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/drivers-in-dashboard/add-driver-in-dashboard/add-driver-in-dashboard.component';
import { DocumentsOfVehicleComponent } from './vendors/rate-dashboard/rate-dashboard-folders/vehicles-in-dashboard/documents-of-vehicle/documents-of-vehicle.component';
import { AddDailyRateComponent } from './vendors/rate-dashboard/rate-dashboard-folders/daily-rates/add-daily-rate/add-daily-rate.component';
import { AddMonthlyRateComponent } from './vendors/rate-dashboard/rate-dashboard-folders/monthly-rates/add-monthly-rate/add-monthly-rate.component';
import { AddFclRateInDashboardComponent } from './vendors/rate-dashboard/rate-dashboard-folders/fcl-rates/add-fcl-rate-in-dashboard/add-fcl-rate-in-dashboard.component';
import { UserDialogInMainScreenComponent } from './customers/user-dialog-in-main-screen/user-dialog-in-main-screen.component';
import { Ffv2Component } from './ffv2/ffv2.component';
import { MasterffvComponent } from './masterffv/masterffv.component';
import { ServiceTypeComponent } from './customers/service-type/service-type.component';
import { ZoneChartComponent } from './customers/zone-chart/zone-chart.component';
import { GatewaysChartComponent } from './customers/gateways-chart/gateways-chart.component'

export const routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent, data: { breadcrumb: 'Customers' } },

  {
    path: 'ratesdashboard', component: RateDashboardComponent, children: [
      { path: '', redirectTo: 'zonesindashboard', pathMatch: 'full' },
      { path: 'fclrates', component: FCLRatesComponent, data: { breadcrumb: 'FCL Rates' } },
      // {path: 'cases', component:PatientInsuranceComponent, data: { breadcrumb : 'Patient Insurance'}},
      { path: 'dailyrates', component: DailyRatesComponent, data: { breadcrumb: 'Daily Rates' } },
      { path: 'monthlyrates', component: MonthlyRatesComponent, data: { breadcrumb: 'Monthly Rates' } },
      { path: 'zonesindashboard', component: ZonesInDashboardComponent, data: { breadcrumb: 'Zones' } },
      { path: 'lanesindashboard', component: LanesInDashboardComponent, data: { breadcrumb: 'Lanes' } },
      { path: 'gatewaysindashboard', component: GatewaysInDashboardComponent, data: { breadcrumb: 'Gateways' } },
      { path: 'driversindashboard', component: DriversInDashboardComponent, data: { breadcrumb: 'Drivers' } },
      { path: 'vehiclesindashboard', component: VehiclesInDashboardComponent, data: { breadcrumb: 'Vehicles' } },
    ], data: { breadcrumb: 'Rates Dashboard' }
  },

  {
    path: 'customerdashboard', component: CustomerDashboardComponent, children: [
      { path: '', redirectTo: 'origins', pathMatch: 'full' },
      { path: 'origins', component: OriginsComponent, data: { breadcrumb: 'Origins' } },
      // {path: 'cases', component:PatientInsuranceComponent, data: { breadcrumb : 'Patient Insurance'}},
      { path: 'destinations', component: DestinationsComponent, data: { breadcrumb: 'Destinations' } },
      { path: 'lanes', component: LanesComponent, data: { breadcrumb: 'Lanes' } },
      { path: 'fclrates', component: FclRatesComponent, data: { breadcrumb: 'FCL Rates' } },
      { path: 'expressrates', component: ExpressRatesComponent, data: { breadcrumb: 'Express Rates' } },
      { path: 'contracts', component: ContractsComponent, data: { breadcrumb: 'Contracts' } },
    ], data: { breadcrumb: 'Customer Dashboard' }
  },

  { path: 'staff', component: StaffComponent, data: { breadcrumb: 'Staff' } },
  { path: 'staff/rolepermissions', component: RolePermissionsComponent, data: { breadcrumb: 'Role Permissions' } },
  { path: 'vendors', component: VendorsComponent, data: { breadcrumb: 'FFV' } },
  { path: 'ffv2', component: Ffv2Component, data: { breadcrumb: 'FFV' } },
  { path: 'vendors/drivers', component: DriversComponent, data: { breadcrumb: 'Drivers' } },
  { path: 'vendors/vehicles', component: VehiclesComponent, data: { breadcrumb: 'Vehicles' } },
  { path: 'lanes', component: AddLanesComponent, data: { breadcrumb: 'Lanes(Shopkart)' } },
  { path: 'zone', component: AddZoneComponent, data: { breadcrumb: 'Zone' } },
  { path: 'gateway', component: GatewayComponent, data: { breadcrumb: 'Gateways(Shopkart)' } },
  { path: 'lane', component: AddlanesComponent, data: { breadcrumb: 'Lanes(Shopkart)' } },
  { path: 'origin', component: AddOriginComponent, data: { breadcrumb: 'Origins(David Malhotra)' } },
  { path: 'destination', component: AddDestinationComponent, data: { breadcrumb: 'Destinations(David Malhotra)' } },
  { path: 'contracts', component: ContractsComponent, data: { breadcrumb: 'Contract' } },
  { path: 'FCLrate', component: FCLratesCustomerComponent, data: { breadcrumb: 'FCL Rates' } },
  { path: 'expressRates', component: AddExpressRatesComponent, data: { breadcrumb: 'Express Rates' } },
  { path: 'vendorZones', component: AddVendorsZonesComponent, data: { breadcrumb: 'Serviceable Zones' } },
];

@NgModule({
  declarations: [UsersComponent, CustomersComponent, StaffComponent, VendorsComponent, AddCustomerComponent, LineGraphComponent, PieChartComponent, AddLanesComponent, LineGraph1Component, PieChart1Component, AddVendorComponent, VehicleDetailsComponent, AddZoneComponent, GatewayComponent, AddlanesComponent, AddOriginComponent, AddDestinationComponent, LineGraph2Component, PieChart2Component, AddStaffComponent, RolePermissionsComponent, AddFCLRatesComponent, AddLocalRatesComponent, ContractsComponent, AddAnotherOriginComponent, AddContractsComponent, AddExpressRatesComponent, AddModelExpressRatesComponent, DriversComponent, AddDriverComponent, FCLratesCustomerComponent, AddFClMOdelRatesComponent, AddMOdelDestinationComponent, FCLRatesComponent, MonthlyRatesComponent, DailyRatesComponent, VehiclesComponent, AddVehicleComponent, RateDashboardComponent, AddVendorsZonesComponent, CustomerDashboardComponent, OriginsComponent, DestinationsComponent, LanesComponent, FclRatesComponent, ExpressRatesComponent, AddOriginCustomerDashboardComponent, AddDestinationCustomerDashboardComponent, AddFclRatesCustomerDashboardComponent, AddExpressRatesCustomerDashboardComponent, ZonesInDashboardComponent, LanesInDashboardComponent, GatewaysInDashboardComponent, VehiclesInDashboardComponent, DriversInDashboardComponent, AddVehicleInDashboardComponent, AddDriverInDashboardComponent, DocumentsOfVehicleComponent, AddDailyRateComponent, AddMonthlyRateComponent, AddFclRateInDashboardComponent, UserDialogInMainScreenComponent, Ffv2Component, MasterffvComponent, ServiceTypeComponent, ZoneChartComponent, GatewaysChartComponent],
  // declarations: [UsersComponent, CustomersComponent, StaffComponent, VendorsComponent, AddCustomerComponent, LineGraphComponent, PieChartComponent, AddRatesComponent,AddLanesComponent, LineGraph1Component, PieChart1Component, AddVendorComponent, VehicleDetailsComponent, AddZoneComponent, GatewayComponent, AddlanesComponent, AddOriginComponent, AddDestinationComponent, LineGraph2Component, PieChart2Component, AddStaffComponent, RolePermissionsComponent, AddFCLRatesComponent, AddLocalRatesComponent,ContractsComponent, AddAnotherOriginComponent, AddContractsComponent, AddExpressRatesComponent, DriversComponent, AddDriverComponent, VehiclesComponent, AddVehicleComponent, RateDashboardComponent, FCLRatesComponent, MonthlyRatesComponent, DailyRatesComponent ],
  imports: [
    CommonModule, NgxChartsModule,
    RouterModule.forChild(routes), SharedModule, AgmCoreModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
  ],
  providers: [AlertService],
  entryComponents: [UserDialogInMainScreenComponent, AddFclRateInDashboardComponent, AddMonthlyRateComponent, AddDailyRateComponent, DocumentsOfVehicleComponent, AddDriverInDashboardComponent, AddVehicleInDashboardComponent, AddExpressRatesCustomerDashboardComponent, AddFclRatesCustomerDashboardComponent, AddDestinationCustomerDashboardComponent, AddOriginCustomerDashboardComponent, AddCustomerComponent, AddVendorComponent, VehicleDetailsComponent, AddStaffComponent, AddZoneComponent, AddFCLRatesComponent, AddAnotherOriginComponent, AddContractsComponent, AddModelExpressRatesComponent, AddFClMOdelRatesComponent, AddMOdelDestinationComponent, AddVehicleComponent, AddDriverComponent],
  // entryComponents:[AddVehicleComponent,AddDriverComponent,AddCustomerComponent,AddRatesComponent,AddVendorComponent,VehicleDetailsComponent,AddStaffComponent,AddZoneComponent,AddFCLRatesComponent,AddAnotherOriginComponent,AddContractsComponent],

})
export class UsersModule { }
