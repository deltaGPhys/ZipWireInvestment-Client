
export class User {
    id: number;
    firstName : string;
    lastName : string;
    email : string;
    password: string;
    accounts: Array<Account> [];
    rent : number;
    salary : number;

    constructor(id:number, firstName:string, lastname:string, email:string, password:string, accounts:Array<Account> [], rent:number, salary: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        this.accounts = accounts;
        this.rent = rent;
        this.salary = salary;
    }
}