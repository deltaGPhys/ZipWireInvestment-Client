
export class User {
    id: number;
    lastName: string;
    firstName: string;
    accounts: Account[];
    email: string;
    

    constructor(id: number, lastName: string, firstName: string, email: string){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.accounts = null;
        this.email = email;
    }
    
}