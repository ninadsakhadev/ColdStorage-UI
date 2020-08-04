import * as CustomerActions from './customer.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { Customer } from '@swamisamarth/api-interfaces';

export const CUSTOMER_FEATURE_KEY = 'customer';

export interface State extends EntityState<Customer> {
  selectedId?: string | number; // which Customer record has been selected
  loaded: boolean; // has the Customer list been loaded
  loading: boolean;
  error?: string | null; // last none error (if any)
}

export interface CustomerPartialState {
  readonly [CUSTOMER_FEATURE_KEY]: State;
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>();

export const initialState: State = customerAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
});

const customerReducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomer, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(CustomerActions.customersLoaded, (state, { customer }) =>
    customerAdapter.addAll(customer, { ...state, loaded: true, loading: false })
  ),
  on(CustomerActions.loadCustomerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CustomerActions.createCustomer, (state, action) => {
    return customerAdapter.addOne(action.customer, state);
  }),

  on(CustomerActions.deleteCustomer, (state, action) => {
    return customerAdapter.removeOne(action.customerId, state);
  }),

  on(CustomerActions.updateCustomer, (state, action) => {
    return customerAdapter.updateOne(
      { id: action.customer.id, changes: action.customer },
      state
    );
  })
);

export function reducer(state: State | undefined, action: Action) {
  return customerReducer(state, action);
}
