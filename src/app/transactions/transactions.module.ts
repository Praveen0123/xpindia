import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentsComponent } from './payments/payments.component';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { AddPaymentComponent } from './payments/add-payment/add-payment.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';

export const routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  { path: 'bills', component: AllBillsComponent,loadChildren: './all-bills/all-bills.module#AllBillsModule', data : { breadcrumb : 'Bills'} },
  { path: 'invoices', component: AllInvoicesComponent,loadChildren: './all-invoices/all-invoices.module#AllInvoicesModule', data : { breadcrumb : 'Invoices'} },
  // { path: 'invoices', component: InvoiceComponent, pathMatch: 'full', data : { breadcrumb : 'Invoices'} },
  // { path: 'bills', component:PaymentsComponent, pathMatch: 'full', data: { breadcrumb: 'Bills'} },
];

@NgModule({
  declarations: [ AllBillsComponent,AllInvoicesComponent,InvoiceComponent, PaymentsComponent,TransactionsComponent, AddPaymentComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,ConfirmationPopoverModule,FormsModule,ReactiveFormsModule
  ],
  entryComponents:[AddPaymentComponent],
  providers:[AlertService]
})
export class TransactionsModule { }
