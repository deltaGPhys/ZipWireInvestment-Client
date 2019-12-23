import { User } from './User';
import { SecurityHolding } from './SecurityHolding';

export class Investment {
    id: number;
    owner: User;
    balance: number;
    openingDate: string;
    acctName: string;
    holdings: SecurityHolding[];
}