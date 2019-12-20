import { Component, OnInit, Inject } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { environment } from 'src/environments/environment'; export const apiUrl = environment.apiUrl;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list-test',
  templateUrl: './transaction-list-test.component.html',
  styleUrls: ['./transaction-list-test.component.css']
})
export class TransactionListTestComponent implements OnInit {

  transactions: Transaction[];
  @Inject(apiUrl) private apiUrl: string

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private text: string = "hiii";

  constructor() { 
    console.log(apiUrl);

  }


  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactions = [
      new Transaction(2,"DEPOSIT",123.45,"Jar of coins"),
      new Transaction(7,"WITHDRAWAL",45.67,"Online purchase from catsweaters.com")
    ];
    return this.transactions;
    // return this.http.get<Transaction[]>(apiUrl+"/transactions")
    //   .pipe(
    //     tap(_ => console.log('fetched transactions')),
    //     catchError(this.handleError<Transaction[]>('getTransactions', []))
    //   );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
