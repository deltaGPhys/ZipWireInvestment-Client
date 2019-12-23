import { Investment } from './Investment';
import { Security } from './Security';

export class SecurityHolding {
    id: number;
    account: Investment;
    security: Security;
    value: number;
    purchaseDate: string;
    numShares: number;
    purchaseCost: number;
}