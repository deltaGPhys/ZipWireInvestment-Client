import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser: FormGroup;
  currentUser: User;

  constructor(private userService : UserService, private router : Router) {
    this.userService.currentUser$.subscribe(data => {this.currentUser = data; console.log(this.currentUser);});
   }
  
  ngOnInit() {
  }

  update() : void {
    this.router.navigate(['/user']);
  }

}
