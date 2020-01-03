import { Component, OnInit } from '@angular/core';
import {SavingGoal} from '../models/Saving-goal.model';
import { GoalServiceService } from '../services/goal-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  private allGoals: Observable <SavingGoal[]>;
  id : number = null;
  goals: any;

  constructor(private goalService: GoalServiceService) { 
    this.goals =this.goalService.getAllGoals(this.id);
    console.log(this.goals);
    //.subscribe(value => {this.allGoals = value; console.log(this.allGoals);});
  
  }

  ngOnInit() {

  }

}
