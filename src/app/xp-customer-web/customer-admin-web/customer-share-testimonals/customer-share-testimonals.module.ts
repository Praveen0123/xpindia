import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CustomerShareTestimonalsComponent } from './customer-share-testimonals.component';
import { AlertService } from '../../../shared/services/alert.service';
import { AddTestimonalComponent } from './add-testimonal/add-testimonal.component';

export const routes = [
  { path: '', component: CustomerShareTestimonalsComponent, pathMatch: 'full', data: { breadcrumb: 'Testimonials' }},
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [CustomerShareTestimonalsComponent, AddTestimonalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddTestimonalComponent],
  providers:[AlertService]
})
export class CustomerShareTestimonalsModule { }
