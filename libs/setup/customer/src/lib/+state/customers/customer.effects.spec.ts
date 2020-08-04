import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CustomerEffects } from './customer.effects';
import * as CustomerActions from './customer.actions';

describe('CustomerEffects', () => {
  let actions: Observable<any>;
  let effects: CustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CustomerEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(CustomerEffects);
  });

  describe('loadCustomer$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CustomerActions.loadCustomer() });

      const expected = hot('-a-|', {
        a: CustomerActions.loadCustomerSuccess({ customer: [] }),
      });

      expect(effects.loadCustomer$).toBeObservable(expected);
    });
  });
});
