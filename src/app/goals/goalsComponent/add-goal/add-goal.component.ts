import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Router } from '@angular/router';

import { GoalServiceService } from 'src/app/services/goal-service.service';
import { User } from 'src/app/models/User';
import { SavingGoal } from 'src/app/models/Saving-goal.model';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  private createSavingGoalForm : FormGroup;
  private savingGoal : SavingGoal;
  private user: User;

  constructor(private goalService : GoalServiceService, private router: Router) { 
    this.createSavingGoalForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
        goalAmount: new FormControl(''),
        endDate: new FormControl(''),
        description: new FormControl('')
  });
  }

  revert() {
    this.createSavingGoalForm.reset();
  }

  onSubmit() {
    //if(this.checkForEmail(this.userEmails, this.userEmail)){
    let savingGoal : SavingGoal = new SavingGoal (
      null,
      this.createSavingGoalForm.controls.goalAmount.value,
      null,
      null,
      this.createSavingGoalForm.controls.endDate.value,
      this.createSavingGoalForm.controls.description.value,
      );
      
      console.log(this.createSavingGoalForm.controls.endDate.value)
      console.log(this.savingGoal);

      this.goalService.getAllGoals().subscribe(data => (console.log(data)));      

      this.goalService.addGoal(this.savingGoal)
        .subscribe(data => {this.savingGoal = data;});

      this.revert();

      this.router.navigate(['/goals']);

    }

    

}
