import { CustomerViewModel } from './customer.models';

export interface AccountViewModel {
  id: number;
  type: string;
  active: boolean;
  customer?: CustomerViewModel;
  customerId: number;
}

export interface AccountCreateViewModel {
  customerId: number;
  type: string;
}

export interface AccountUpdateViewModel {
  id: number;
  type: string;
  active: boolean;
}
