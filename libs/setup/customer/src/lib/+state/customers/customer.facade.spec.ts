import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CustomerEntity } from './customer.models';
import { CustomerEffects } from './customer.effects';
import { CustomerFacade } from './customer.facade';

import * as CustomerSelectors from './customer.selectors';
import * as CustomerActions from './customer.actions';
import {
  CUSTOMER_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './customer.reducer';

interface TestSchema {
  customer: State;
}

describe('CustomerFacade', () => {
  let facade: CustomerFacade;
  let store: Store<TestSchema>;
  const createCustomerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CustomerEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CUSTOMER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CustomerEffects]),
        ],
        providers: [CustomerFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CustomerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allCustomer$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(CustomerActions.loadCustomer());

        list = await readFirst(facade.allCustomer$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadCustomerSuccess` to manually update list
     */
    it('allCustomer$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allCustomer$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          CustomerActions.loadCustomerSuccess({
            customer: [
              createCustomerEntity('AAA'),
              createCustomerEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allCustomer$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
