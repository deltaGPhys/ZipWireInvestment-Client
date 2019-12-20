import { Account } from "./Account";

export class Transaction {
    id: number;
    transactionType: string;
    amount: number;
    account: Account = null;
    comment: string;

    constructor(id:number,transactionType:string,amount:number,comment:string){
        this.id = id;
        this.transactionType = transactionType;
        this.amount = amount;
        this.account = null;
        this.comment = comment;
    }
}