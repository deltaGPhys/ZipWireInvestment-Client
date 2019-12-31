import { Component, OnInit} from '@angular/core';
import{User} from '../models/User';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {CreateAccountService} from '../services/create-account.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private userEmails: any;
  private user: User;
  allEmails: string[] = [];
  private createUserForm: FormGroup;
  //private userEmail: string = "";
  //private allUsers: User [];
  emailAlreadyTaken : boolean = false;
 
  constructor(private createAccountService: CreateAccountService, private router: Router) { 
    this.createUserForm = this.createFormGroup();
    this.userEmails = this.createAccountService.getAllEmails()
    .subscribe(value => {this.allEmails = value; console.log(this.allEmails);});;
  
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
    //this.userEmail = this.createUserForm.controls.email.value;
    //if(this.checkForEmail(this.allEmails, this.userEmail)){
    console.log("Trying to make a new user");
      var user: User = new User (
      null,
      this.createUserForm.controls.firstName.value,
      this.createUserForm.controls.lastName.value,
      this.createUserForm.controls.email.value,
      this.createUserForm.controls.password.value,
      this.createUserForm.controls.rent.value,
      this.createUserForm.controls.salary.value);
    
   
    console.log(this.user);
    
    this.createAccountService.addUser(this.user)
      .subscribe(data => {this.user = data;});
      
      this.revert();

      this.router.navigate(['/accounts']);
    //}

    // else {
    //     this.emailAlreadyTaken = true;
    //     this.router.navigate(['/register']);
    // }
}

  checkForEmail(allEmails, email): boolean{
    for (let i = 0; i < allEmails.length; i++) {
      if(email === allEmails[i]){
      console.log ("This email NOT available");
      return false;
      }
    }
    return true;
  }

  // emailAlreadyExist = "";
  // emailCheckUnique () {
  //   this.ss.emailCheckUnique(this.angForm.controls['s_email'].value).subscribe(res => {
  //     this.studentEmailcheck = res;
  //     if (this.studentEmailcheck.length > 0) {
  //       this.emailAlreadyExist = "Email Alredy Exist";
  //     }
  //     else{
  //       this.emailAlreadyExist = "";
  //     }
  //   });

  // }

  // private validateUsername() {
  //   this.createAccountService.
     
  // }


  loadUserEmails(){
    this.createAccountService.getAllEmails();
  }
}
