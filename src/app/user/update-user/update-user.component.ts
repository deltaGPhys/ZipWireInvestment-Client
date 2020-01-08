import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;
  currentUser: User;

  constructor(private userService : UserService, private router : Router) {
    this.userService.currentUser$.subscribe(data => {this.currentUser = data; console.log(this.currentUser);});
    this.updateUserForm = this.createFormGroup();
   }
  
  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({  
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        email: new FormControl('', [Validators.required,  Validators.email])
        //password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!_.@$%^&*-]).{8,}$')]),      
    });
  }

  get firstName() {
    return this.updateUserForm.get('firstName');
  } 

  get lastName() {
    return this.updateUserForm.get('lastName');
  } 

  get email() {
    return this.updateUserForm.get('email');
  } 

  update() : void {
    if(this.updateUserForm.valid)
      {
        console.log(this.updateUserForm.value);
      }
    this.router.navigate(['/user']);   
  }

}
