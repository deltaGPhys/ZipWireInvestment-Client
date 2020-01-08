import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  updateUser : boolean = false;
  
  currentUser: User;

  constructor(private userService: UserService, private router: Router) { 
    this.userService.currentUser$.subscribe(data => {this.currentUser = data; console.log(this.currentUser);});
    
  }

  ngOnInit() {
  }

  displayEdit() : void {
    this.router.navigate(['/update-user']);
  }
  
}
