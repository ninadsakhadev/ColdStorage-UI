import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Customer } from '@swamisamarth/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return of(null).pipe(
      delay(5000),
      map(() => [...this.customers])
    );
    //return delay(5000).map([...this.customers]);
    //return this.http.get('/api/customers');
  }

  createCustomer(Customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/api/customers', Customer);
  }

  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete('/api/customers/' + customerId);
  }

  updateCustomer(
    customerId: string | number,
    changes: Partial<Customer>
  ): Observable<any> {
    return this.http.put('/api/customers/' + customerId, changes);
  }

  customers = [
    {
      id: '1',
      name: 'Ninad',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '2',
      name: 'Kiran',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '3',
      name: 'Cia',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '4',
      name: 'Myra',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '5',
      name: 'Aai',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '6',
      name: 'Aaji',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '7',
      name: 'Jaychya',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '8',
      name: 'Mallya',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
    {
      id: '9',
      name: 'Pargya',
      address: 'Nikolai',
      phone: 'Uvarov',
    },
  ];
}
