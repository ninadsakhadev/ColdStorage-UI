import { createAction, props } from '@ngrx/store';

import { Customer } from '@swamisamarth/api-interfaces';
import { Update } from '@ngrx/entity';

export const loadCustomer = createAction('[Customer] Load Customer');

export const customersLoaded = createAction(
  '[Customer] Load Customer Success',
  props<{ customer: Customer[] }>()
);

export const loadCustomerFailure = createAction(
  '[Customer] Load Customer Failure',
  props<{ error: any }>()
);

export const createCustomer = createAction(
  '[Customer] Create Customer',
  props<{ customer: Customer }>()
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  props<{ customerId: string }>()
);

export const updateCustomer = createAction(
  '[Customer] Update Customer',
  props<{ customer: Customer }>()
);

export const CustomerActionTypes = {
  loadCustomer,
  customersLoaded,
  createCustomer,
  deleteCustomer,
  updateCustomer,
};
