import { Account } from "./Account";
import { TransactionType } from './TransactionType';


export class Transaction {
    id: number;
    transactionType: TransactionType; 
    amount: number;
    account: Account = null;
    comment: string;

    constructor(id:number,transactionType:TransactionType,amount:number,comment:string){
        this.id = id;
        this.transactionType = transactionType;
        this.amount = amount;
        this.account = null;
        this.comment = comment;
    }
}