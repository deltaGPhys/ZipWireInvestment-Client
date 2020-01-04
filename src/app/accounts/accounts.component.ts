import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  template: `<h2>
  Welcome {{name}} Account # {{myId}}</h2>

<header>
    <h1>Account Summary</h1>
</header>
<aside>

    <h2>Checking & Savings</h2>
    <ul>
        <li><a href="#">Checking</a></li>
        <li><a href="#">Savings</a></li>
        <li><a href="#">Goal Account</a></li>

    </ul>
</aside>`,

  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
public name = "Charlotte Beale";
public myId = "675472";
  constructor() { }

  ngOnInit() {
  }

}
