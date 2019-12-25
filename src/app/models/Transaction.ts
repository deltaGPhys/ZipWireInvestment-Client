import { Account } from "./Account";
import { TransactionType } from './TransactionType';


export class Transaction {
    id: number;
    type: TransactionType; 
    amount: number;
    account: Account = null;
    comment: string;

    constructor(id:number,transactionType:TransactionType,amount:number,comment:string){
        this.id = id;
        this.type = transactionType;
        this.amount = amount;
        this.account = null;
        this.comment = comment;
    }
}