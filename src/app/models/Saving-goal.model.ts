import {User} from './User';
import {GoalAccount} from './Goal-account.model'

export class SavingGoal {
    id: number;
    goalAmount: number;
    owner: User;
    account: GoalAccount;
    endDate: Date;
    description: string;

    constructor(id: number, goalAmount: number, owner: User, account: GoalAccount, endDate: Date, description: string){
        this.id = id;
        this.goalAmount = goalAmount;
        this.owner = owner;
        //this.account = account;
        this.endDate = endDate;
        this.description = description;
    }

}
