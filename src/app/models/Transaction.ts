import { Account } from "./Account";

export class Transaction {
    id: number;
    transactionType: string;
    amount: number;
    account: Account = null;
    comment: string;
}