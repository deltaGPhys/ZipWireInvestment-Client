export class Account {
    id: number;
    balance : number;
    openingDate : number;
    owner: string;
    acctName : string;

    constructor(id:number, balance:number, openingDate:number, owner:string, acctName:string){
        this.id = id;
        this.balance = balance;
        this.openingDate = openingDate;
        this.owner = owner;
        this.acctName = acctName;
      
    }
}