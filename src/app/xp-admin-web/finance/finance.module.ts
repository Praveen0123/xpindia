import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BillsComponent } from './bills/bills.component';
import { InvoicesComponent } from './invoices/invoices.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

export const routes = [
  { path: '', redirectTo: 'receivables', pathMatch: 'full' },
  { path: 'receivables', component: BillsComponent,loadChildren: './bills/bills.module#BillsModule', data : { breadcrumb : 'Receivables'} },
  { path: 'payables', component: InvoicesComponent,loadChildren: './invoices/invoices.module#InvoicesModule', data : { breadcrumb : 'Payables'} },
  // { path: 'receivables', component: ReceivablesComponent, data : { breadcrumb : 'Receivables'} },

  // { path: '', pathMatch: 'full',component: FinanceComponent, data : { breadcrumb : 'FCL Orders'} },
];

@NgModule({
  declarations: [InvoicesComponent,BillsComponent ],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class FinanceModule { }
