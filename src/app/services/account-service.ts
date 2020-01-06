import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account';
import {environment } from 'src/environments/environment';
import { Accounttype } from '../models/accounttype';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = environment.apiUrl;
  private accountUrl = `${this.apiUrl}/account`;
  constructor(private http:HttpClient) { 
    this.accountUrl = """;
    this.accountUrl = '';
  }

  public getAccount(): Observable<Account>{
    return this.http.get<Account>(this.accountUrl + "/1")
  }

  public getAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl + "/api/accounts");
  }

  public getAccountsById(userid: string): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl + "/api/accounts/user/" + userid);
  }

  public createAccount(balance: number, userid: number, purpose: string): Observable<Account>{
    let newAccount: Account = {id: 0, balance: balance, userId: userId, acctName:acctName}
    console.log("creating new account with userid:" + newAccount.userId);
   return this.http.post<Account>(this.apiUrl + "/api/accounts", newAccount);
  }

  getAccountTypes(): Observable<Accounttype[]> {
    const url = `${this.apiUri}/accounttype`;
    this.http.get(url).subscribe(data => {
        console.log(data);
    });
    return this.http.get<Accounttype[]>(url);
  }

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  };

  public deleteAccount(id: number): Observable<boolean>{
    return this.http.delete<boolean>(this.apiUrl + "/api/accounts/" + id);
  }


}