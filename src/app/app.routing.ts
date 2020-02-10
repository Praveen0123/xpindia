import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FinanceComponent } from './xp-admin-web/finance/finance.component';

export const routes: Routes = [
    {  
        path:'instanttransport', 
        component: LayoutComponent, children: [ 
            { path: '', redirectTo: 'Analytics', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './xp-admin-web/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }},
            { path: 'customerdashboard', loadChildren: './xp-customer-web/customer-dashboard/customer-dashboard.module#CustomerDashboardModule',pathMatch:"full", data: { breadcrumb: 'Dashboard' }},
            { path: 'fleetDashboard', loadChildren: './fleet-dashboard/fleet-dashboard.module#FleetDashboardModule',pathMatch:"full", data: { breadcrumb: 'Fleet Dashboard' }},
            // { path: 'users', loadChildren: './manage-users/manage-users.module#ManageUsersModule', data: { breadcrumb: 'Manage Users' }},
           
            { path: 'locations', loadChildren: './xp-customer-web/customer-location-master/customer-location-master.module#CustomerLocationMasterModule', data: { breadcrumb: 'Location Master' }},
           
            
           
            { path: 'contracts', loadChildren: './xp-customer-web/customer-contracts/customer-contracts.module#CustomerContractsModule', data: { breadcrumb: 'Contracts' }},
            
            { path: 'operations', loadChildren: './operations/operations.module#OperationsModule', data: { breadcrumb: 'Operations' }},
            { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsModule', data: { breadcrumb: 'Transactions' }},
            { path: 'admin', loadChildren: './xp-admin-web/admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
            // { path: 'users', loadChildren: './xp-admin-web/users/users.module#UsersModule', data: { breadcrumb: 'Admin' }},
            { path: 'fcl', loadChildren: './xp-admin-web/fcl/fcl.module#FCLModule', data: { breadcrumb: 'FCL Orders' }},
            { path: 'capacity', loadChildren: './xp-admin-web/capacity/capacity.module#CapacityModule', data: { breadcrumb: 'Capacity' }},
            { path: 'fleet', loadChildren: './fleet/fleet.module#FleetModule', data: { breadcrumb: 'Fleet' }},
            { path: 'loads', loadChildren: './loads/loads.module#LoadsModule', data: { breadcrumb: 'Loads' }},
            { path: 'tripsinvendor', loadChildren: './trips-in-vendor/trips-in-vendor.module#TripsInVendorModule', data: { breadcrumb: 'Vendor Trips' }},
            { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule', data: { breadcrumb: 'Payments' }},
            { path: 'customerinvoice', loadChildren: './xp-customer-web/customer-invoices/customer-invoices.module#CustomerInvoicesModule', data: { breadcrumb: 'Customer Invoice' }},
            { path: 'orders', loadChildren: './xp-admin-web/orders/orders.module#OrdersModule', data: { breadcrumb: 'Orders' }},
            { path: 'shipments', loadChildren: './xp-admin-web/shipments/shipments.module#ShipmentsModule', data: { breadcrumb: 'Shipments' }},
            { path: 'finance',component: FinanceComponent,  loadChildren: './xp-admin-web/finance/finance.module#FinanceModule', data: { breadcrumb: 'Finance' }},
            { path: 'user', loadChildren: './xp-admin-web/users/users.module#UsersModule', data: { breadcrumb: 'Users' }},
            { path: 'trips', loadChildren: './xp-admin-web/trips/trips.module#TripsModule', data: { breadcrumb: 'Trips' }},
            { path: 'operation', loadChildren: './xp-admin-web/operations/operations.module#OperationsModule', data: { breadcrumb: 'Operations' }},
            { path: 'rates', loadChildren: './xp-customer-web/rates/rates.module#RatesModule', data: { breadcrumb: 'Rates' }},
            { path: 'customerAdmin', loadChildren: './xp-customer-web/customer-admin-web/customer-admin-web.module#CustomerAdminWebModule', data: { breadcrumb: 'Customer Admin' }},
            { path: 'Analytics', loadChildren: './xp-admin-web/analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Analytics' }},
            { path: 'ordersNew', loadChildren: './xp-admin-web/ordernew/ordernew.module#OrdernewModule', data: { breadcrumb: 'Orders' }},
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 