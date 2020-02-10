import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsInVendorComponent } from './trips-in-vendor.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component:TripsInVendorComponent, pathMatch: 'full', data: { breadcrumb: 'Vendor Trips' } },
];

@NgModule({
  declarations: [TripsInVendorComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TripsInVendorModule { }
