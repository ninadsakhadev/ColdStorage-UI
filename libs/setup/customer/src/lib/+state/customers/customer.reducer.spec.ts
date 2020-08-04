// import { CustomerEntity } from './customer.models';
// import * as CustomerActions from './customer.actions';
// import { State, initialState, reducer } from './customer.reducer';

// describe('Customer Reducer', () => {
//   const createCustomerEntity = (id: string, name = '') =>
//     ({
//       id,
//       name: name || `name-${id}`,
//     } as CustomerEntity);

//   beforeEach(() => {});

//   describe('valid Customer actions', () => {
//     it('loadCustomerSuccess should return set the list of known Customer', () => {
//       const customer = [
//         createCustomerEntity('PRODUCT-AAA'),
//         createCustomerEntity('PRODUCT-zzz'),
//       ];
//       const action = CustomerActions.loadCustomerSuccess({ customer });

//       const result: State = reducer(initialState, action);

//       expect(result.loaded).toBe(true);
//       expect(result.ids.length).toBe(2);
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as any;

//       const result = reducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
