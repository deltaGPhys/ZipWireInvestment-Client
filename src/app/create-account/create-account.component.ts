import { Component, OnInit} from '@angular/core';
import{User} from '../models/User';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private user: User;
  private createUserForm: FormGroup;
 
  constructor(private loginService: LoginService, private router: Router) { 
    this.createUserForm = this.createFormGroup();
  }

  ngOnInit() {
  
  }

  createFormGroup() {
    return new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl(''),
        rent: new FormControl('', [Validators.required, Validators.pattern('^[0-9.]+$')]),
        salary: new FormControl('', [Validators.required, Validators.pattern('^[0-9.]+$')])
  });
  }

  revert() {
    this.createUserForm.reset();
  }

  onSubmit() {
    let user : User = new User (
      null,
      this.createUserForm.controls.firstName.value,
      this.createUserForm.controls.lastName.value,
      this.createUserForm.controls.email.value,
      this.createUserForm.controls.password.value,
      this.createUserForm.controls.rent.value,
      this.createUserForm.controls.salary.value);
   
    console.log(user);
    
    this.loginService.addUser(user)
      .subscribe(data => {this.user = data;});
      
      this.revert();

      this.router.navigate(['/accounts']);
    
  }
}
