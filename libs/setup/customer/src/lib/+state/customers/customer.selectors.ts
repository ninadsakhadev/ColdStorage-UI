import {
  CUSTOMER_FEATURE_KEY,
  CustomerPartialState,
  State,
  customerAdapter,
} from './customer.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Customer' feature state managed by NgRx
export const getCustomerState = createFeatureSelector<
  CustomerPartialState,
  State
>(CUSTOMER_FEATURE_KEY);

const { selectAll, selectEntities } = customerAdapter.getSelectors();

export const getCustomerLoaded = createSelector(
  getCustomerState,
  (state: State) => state.loaded
);

export const getCustomerLoading = createSelector(
  getCustomerState,
  (state: State) => state.loading
);

export const getCustomerError = createSelector(
  getCustomerState,
  (state: State) => state.error
);

export const getAllCustomer = createSelector(getCustomerState, (state: State) =>
  selectAll(state)
);

export const getCustomerEntities = createSelector(
  getCustomerState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCustomerState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCustomerEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
