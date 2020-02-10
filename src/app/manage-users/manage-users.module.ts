import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { FleetVendorsComponent } from './fleet-vendors/fleet-vendors.component';
import { ManageUsersComponent } from './manage-users.component';
import { StaffComponent } from './staff/staff.component';
import { SharedModule } from '../shared/shared.module';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { AddVendorComponent } from './fleet-vendors/add-vendor/add-vendor.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { VehicleDetailsComponent } from './fleet-vendors/vehicle-details/vehicle-details.component';
import { LineGraphComponent } from './customers/line-graph/line-graph.component';
import { PieChartComponent } from './customers/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipesModule } from '../theme/pipes/pipes.module';
import { LineGraph1Component } from './fleet-vendors/line-graph1/line-graph1.component';
import { PieChart1Component } from './fleet-vendors/pie-chart1/pie-chart1.component';
import { LineGraph2Component } from './staff/line-graph2/line-graph2.component';
import { PieChart2Component } from './staff/pie-chart2/pie-chart2.component';
import { RolePermissionsComponent } from './staff/role-permissions/role-permissions.component';


export const routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent, pathMatch: 'full', data : { breadcrumb : 'Customers'} },
  { path: 'vendors', component:FleetVendorsComponent, pathMatch: 'full', data: { breadcrumb: 'Vendors'} },
  { path: 'staff', component:StaffComponent, pathMatch: 'full', data: { breadcrumb: 'Staff'} },
  { path: 'staff/rolepermissions', component:RolePermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Role Permissions'} },
];

@NgModule({
  declarations: [CustomersComponent, FleetVendorsComponent,ManageUsersComponent, StaffComponent, AddCustomerComponent, AddVendorComponent, AddStaffComponent, VehicleDetailsComponent, LineGraphComponent, PieChartComponent, LineGraph1Component, PieChart1Component, LineGraph2Component, PieChart2Component, RolePermissionsComponent],
  imports: [
    CommonModule,SharedModule,FormsModule,ReactiveFormsModule,PipesModule,NgxChartsModule,
    RouterModule.forChild(routes),ConfirmationPopoverModule
  ],
  entryComponents:[AddCustomerComponent, AddVendorComponent,AddStaffComponent,VehicleDetailsComponent],
  providers:[AlertService]
})
export class ManageUsersModule { }




