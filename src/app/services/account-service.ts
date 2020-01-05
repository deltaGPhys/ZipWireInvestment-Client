import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { } from '';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = environments.apiUrl;
  constructor(private http:HttpClient) { 
    //this.accountUrl = """;
    // this.accountUrl = '';
  }

  // public getAccount(): Observable<Account>{
  //   return this.http.get<Account>(this.accountUrl + "/1")
  // }

  public getAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl + "/api/accounts");
  }

  public getAccountsByUser(userid: string): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl + "/api/accounts/user/" + userid);
  }

  public createAccount(balance: number, userid: number, purpose: string): Observable<Account>{
    let newAccount: Account = {id: 0, balance: balance, userId: userid, purpose:purpose}
    console.log("creating new account with userid:" + newAccount.userId);
    return this.http.post<Account>(this.apiUrl + "/api/accounts", newAccount);
  }

  public deleteAccount(id: number): Observable<boolean>{
    return this.http.delete<boolean>(this.apiUrl + "/api/accounts/" + id);
  }


}