import { AccountViewModel } from './account.models';

export interface CustomerViewModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  accounts?: AccountViewModel[];
}

export interface CustomerCreateViewModel {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CustomerUpdateViewModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
