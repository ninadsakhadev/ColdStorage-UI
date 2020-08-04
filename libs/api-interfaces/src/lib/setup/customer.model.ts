import { ListResponse } from '../list-response.model';

export class Customer {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export interface CustomerList extends ListResponse<Customer> {}
