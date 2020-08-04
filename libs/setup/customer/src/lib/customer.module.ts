import * as fromCustomer from './+state/customers/customer.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, UiSharedModule } from '@swamisamarth/ui-shared';

import { AddCustomerDialogComponent } from './dialogs/add/add-customer-dialog.component';
import { CommonModule } from '@angular/common';
import { CustomerEffects } from './+state/customers/customer.effects';
import { CustomerFacade } from './+state/customers/customer.facade';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerService } from './customer.service';
import { DeleteCustomerDialogComponent } from './dialogs/delete/delete-customer-dialog.component';
import { EditCustomerDialogComponent } from './dialogs/edit/edit-customer-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    UiSharedModule,
    CustomerRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromCustomer.CUSTOMER_FEATURE_KEY,
      fromCustomer.reducer
    ),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  declarations: [
    CustomerListComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    DeleteCustomerDialogComponent,
  ],
  providers: [CustomerFacade, CustomerService],
  entryComponents: [
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    DeleteCustomerDialogComponent,
  ],
})
export class CustomerModule {}
