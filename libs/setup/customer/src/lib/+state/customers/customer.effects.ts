import * as CustomerActions from './customer.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';

import { CustomerService } from '../../customer.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class CustomerEffects {
  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomer),
      mergeMap(() =>
        this.customerService.getAll().pipe(
          map((customer) => CustomerActions.customersLoaded({ customer })),
          catchError((error) =>
            of(CustomerActions.loadCustomerFailure({ error }))
          )
        )
      )
    )
  );

  createCustomer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CustomerActions.createCustomer),
        concatMap((action) =>
          this.customerService.createCustomer(action.customer)
        ),
        tap(() => this.router.navigateByUrl('/customers'))
      ),
    { dispatch: false }
  );

  deleteCustomer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CustomerActions.deleteCustomer),
        concatMap((action) =>
          this.customerService.deleteCustomer(action.customerId)
        )
      ),
    { dispatch: false }
  );

  updateCustomer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CustomerActions.updateCustomer),
        concatMap((action) =>
          this.customerService.updateCustomer(
            action.customer.id,
            action.customer
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private router: Router
  ) {}
}

// fetch({
//   run: (action) => {
//     // Your custom service 'load' logic goes here. For now just return a success action...
//     return CustomerActions.loadCustomerSuccess({ customer: [] });
//   },

//   onError: (action, error) => {
//     console.error('Error', error);
//     return CustomerActions.loadCustomerFailure({ error });
//   },
// })
// mergeMap(() =>
//   this.customerService.getAll().pipe(
//     map((movies) => ({
//       type: '[Movies API] Movies Loaded Success',
//       payload: movies,
//     })),
//     catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
//   )
// );
