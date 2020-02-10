import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { CustomerContractsComponent } from './customer-contracts.component';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { BbComponent } from './bb/bb.component';
import { MasterComponent } from './master/master.component';
import { AddFCLContractComponent } from './fcl/add-fclcontract/add-fclcontract.component';
import { AddContractComponent } from './lcl/add-contract/add-contract.component';
import { AddBBContractComponent } from './bb/add-bbcontract/add-bbcontract.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


export const routes = [
  { path: '', redirectTo: 'fcl', pathMatch: 'full' },
  { path: 'fcl', component: FclComponent, pathMatch: 'full', data: { breadcrumb: 'FCL orders' } },
  { path: 'lcl', component: LclComponent, pathMatch: 'full', data: { breadcrumb: 'Express orders' } },
  { path: 'bb', component: BbComponent, pathMatch: 'full', data: { breadcrumb: 'Bespoke orders' } },
];

@NgModule({
  declarations: [CustomerContractsComponent, FclComponent, LclComponent, BbComponent, MasterComponent, AddFCLContractComponent, AddContractComponent, AddBBContractComponent],
  imports: [
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule, ConfirmationPopoverModule
  ],
  providers: [AlertService],
  entryComponents: [AddFCLContractComponent, AddContractComponent, AddBBContractComponent]
})
export class CustomerContractsModule { }
