import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; export const apiUrl = environment.apiUrl;

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Investment } from '../models/Investment';
import { Security } from '../models/Security';
import { SecurityHolding } from '../models/SecurityHolding';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    
    @Inject(apiUrl) private apiUrl: string;
    private investmentUrl: string = apiUrl+"/investment/";
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { 
    
    }

    /** GET Account from the server */
    getAccount (id): Observable<Investment> {
        console.log(this.investmentUrl+id);
        return this.http.get<Investment>(this.investmentUrl+id)
            .pipe(
                tap(_ => console.log('fetched InvAcct')),
                catchError(this.handleError<Investment>('getAcct'))
            );
    }

    /** GET Securities from the server */
    getSecurities (): Observable<Security[]> {
      console.log(this.investmentUrl+"securities");
      return this.http.get<Security[]>(this.investmentUrl+"securities")
          .pipe(
              tap(_ => console.log('fetched Securities')),
              catchError(this.handleError<Security[]>('getSec'))
          );
    }

    /** GET holding for this user from the server */
    getHoldings (accountId): Observable<SecurityHolding[]> {
      console.log(this.investmentUrl+"holdings/"+accountId);
      return this.http.get<SecurityHolding[]>(this.investmentUrl+"holdings/"+accountId)
          .pipe(
              tap(_ => console.log('fetched Holdings')),
              catchError(this.handleError<SecurityHolding[]>('getHold'))
          );
    }


//   /** GET Transaction by id. Return `undefined` when id not found */
//   getTransactionNo404<Data>(id: number): Observable<Transaction> {
//     const url = `${this.TransactionesUrl}/?id=${id}`;
//     return this.http.get<Transaction[]>(url)
//       .pipe(
//         map(Transactiones => Transactiones[0]), // returns a {0|1} element array
//         tap(h => {
//           const outcome = h ? `fetched` : `did not find`;
//           this.log(`${outcome} Transaction id=${id}`);
//         }),
//         catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
//       );
//   }

//   /** GET Transaction by id. Will 404 if id not found */
//   getTransaction(id: number): Observable<Transaction> {
//     const url = `${this.TransactionesUrl}/${id}`;
//     return this.http.get<Transaction>(url).pipe(
//       tap(_ => this.log(`fetched Transaction id=${id}`)),
//       catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
//     );
//   }

//   /* GET Transactiones whose name contains search term */
//   searchTransactiones(term: string): Observable<Transaction[]> {
//     if (!term.trim()) {
//       // if not search term, return empty Transaction array.
//       return of([]);
//     }
//     return this.http.get<Transaction[]>(`${this.TransactionesUrl}/?name=${term}`).pipe(
//       tap(_ => this.log(`found Transactiones matching "${term}"`)),
//       catchError(this.handleError<Transaction[]>('searchTransactiones', []))
//     );
//   }

//   //////// Save methods //////////

  // /** POST: add a new Transaction to the server */
  // addTransaction (Transaction: Transaction): Observable<Transaction> {
  //   return this.http.post<Transaction>(this.transactionsUrl, Transaction, this.httpOptions).pipe(
  //     tap((newTransaction: Transaction) => console.log(`added Transaction w/ id=${newTransaction.id}`)),
  //     catchError(this.handleError<Transaction>('addTransaction'))
  //   );
  // }

//   /** DELETE: delete the Transaction from the server */
//   deleteTransaction (Transaction: Transaction | number): Observable<Transaction> {
//     const id = typeof Transaction === 'number' ? Transaction : Transaction.id;
//     const url = `${this.TransactionesUrl}/${id}`;

//     return this.http.delete<Transaction>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted Transaction id=${id}`)),
//       catchError(this.handleError<Transaction>('deleteTransaction'))
//     );
//   }

//   /** PUT: update the Transaction on the server */
//   updateTransaction (Transaction: Transaction): Observable<any> {
//     return this.http.put(this.TransactionesUrl, Transaction, this.httpOptions).pipe(
//       tap(_ => this.log(`updated Transaction id=${Transaction.id}`)),
//       catchError(this.handleError<any>('updateTransaction'))
//     );
//   }

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
