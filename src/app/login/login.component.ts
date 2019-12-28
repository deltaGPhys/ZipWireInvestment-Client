import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';
import {User} from '../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private loginForm: FormGroup;

  public constructor(private loginService: LoginService) {
    this.loginForm = this.createFormGroup();
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
    this.loginForm.reset();
  }
  
  onSubmit() {
    let email: string = this.loginForm.controls.email.value;
    let password: string = this.loginForm.controls.password.value;
    
  
   
    // console.log(user);
    
    // this.createAccountService.addUser(user)
    //   .subscribe(data => {this.user = data;});
      
    //   this.revert();

    //   this.router.navigate(['/accounts']);
    
  }

  emailExists(email: string){
    
  }

}
