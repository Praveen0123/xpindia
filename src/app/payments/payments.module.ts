import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component'; 
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component:PaymentsComponent, pathMatch: 'full', data: { breadcrumb: 'Vendor Payments' } },
];

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PaymentsModule { }
