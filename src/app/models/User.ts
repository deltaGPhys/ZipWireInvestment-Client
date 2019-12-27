
export class User {
    id: number;
    firstName : string;
    lastName : string;
    email : string;
    password: string;
    rent : number;
    salary : number;

    constructor(id:number, firstName:string, lastname:string, email:string, password:string, rent:number, salary: number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        this.rent = rent;
        this.salary = salary;
    }
}