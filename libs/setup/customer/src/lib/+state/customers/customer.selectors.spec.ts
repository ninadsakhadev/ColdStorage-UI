// import { CustomerEntity } from './customer.models';
// import { State, customerAdapter, initialState } from './customer.reducer';
// import * as CustomerSelectors from './customer.selectors';

// describe('Customer Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getCustomerId = (it) => it['id'];
//   const createCustomerEntity = (id: string, name = '') =>
//     ({
//       id,
//       name: name || `name-${id}`,
//     } as CustomerEntity);

//   let state;

//   beforeEach(() => {
//     state = {
//       customer: customerAdapter.addAll(
//         [
//           createCustomerEntity('PRODUCT-AAA'),
//           createCustomerEntity('PRODUCT-BBB'),
//           createCustomerEntity('PRODUCT-CCC'),
//         ],
//         {
//           ...initialState,
//           selectedId: 'PRODUCT-BBB',
//           error: ERROR_MSG,
//           loaded: true,
//         }
//       ),
//     };
//   });

//   describe('Customer Selectors', () => {
//     it('getAllCustomer() should return the list of Customer', () => {
//       const results = CustomerSelectors.getAllCustomer(state);
//       const selId = getCustomerId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelected() should return the selected Entity', () => {
//       const result = CustomerSelectors.getSelected(state);
//       const selId = getCustomerId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getCustomerLoaded() should return the current 'loaded' status", () => {
//       const result = CustomerSelectors.getCustomerLoaded(state);

//       expect(result).toBe(true);
//     });

//     it("getCustomerError() should return the current 'error' state", () => {
//       const result = CustomerSelectors.getCustomerError(state);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
