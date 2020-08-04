import * as CustomerSelectors from './customer.selectors';
import * as fromCustomer from './customer.reducer';

import { Action, Store, select } from '@ngrx/store';
import {
  createCustomer,
  deleteCustomer,
  loadCustomer,
  updateCustomer,
} from './customer.actions';

import { Customer } from '@swamisamarth/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerFacade {
  loaded$ = this.store.pipe(select(CustomerSelectors.getCustomerLoaded));
  loading$ = this.store.pipe(select(CustomerSelectors.getCustomerLoading));
  allCustomer$ = this.store.pipe(select(CustomerSelectors.getAllCustomer));
  selectedCustomer$ = this.store.pipe(select(CustomerSelectors.getSelected));
  error$ = this.store.pipe(select(CustomerSelectors.getCustomerError));

  constructor(private store: Store<fromCustomer.CustomerPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  getAll() {
    this.store.dispatch(loadCustomer());
  }

  addCustomer(customer: Customer) {
    this.store.dispatch(createCustomer({ customer }));
  }

  updateCustomer(customer: Customer) {
    this.store.dispatch(updateCustomer({ customer }));
  }

  deleteCustomer(customerId: string) {
    this.store.dispatch(deleteCustomer({ customerId }));
  }
}
