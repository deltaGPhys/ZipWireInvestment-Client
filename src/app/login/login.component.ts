import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }  

  ngOnInit() {
  }

}
