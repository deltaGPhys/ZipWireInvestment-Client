import { Component, OnInit, Input } from '@angular/core';
import{User} from 'src/app/models/User';
import {FormGroup, FormControl, FormArray, Validators, FormBuilder} from '@angular/forms';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private user: User;
  private createAccountForm: FormGroup;
 
  constructor(private loginService: LoginService  ) { 
    this.createAccountForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(''),
      rent: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      salary: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  revert() {
    this.createAccountForm.reset();
  }

  onSubmit() {
  
  }

  addUser() {
    this.loginService.addUser(this.createAccountForm.value)
      .subscribe(data => {this.user = data;
      console.log(this.user);});
  }



}
