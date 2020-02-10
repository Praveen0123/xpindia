import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FCLComponent } from '../fcl/fcl.component';
import { CarService } from './carService';

export const routes = [
  { path: '', pathMatch: 'full',component: FCLComponent, data : { breadcrumb : 'FCL Orders'} },
];

@NgModule({
  declarations: [FCLComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule,AgmCoreModule,ConfirmationPopoverModule,ReactiveFormsModule, FormsModule,OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers:[AlertService,CarService]
})
export class FCLModule { }
