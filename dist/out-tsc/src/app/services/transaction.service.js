import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const apiUrl = environment.apiUrl;
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
        this.transactionsUrl = apiUrl + "/transactions";
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        //console.log("asdasdasdasdas");
        this.refreshTransTypes();
        console.log(this.transTypes);
    }
    /** GET Transactions from the server */
    getTransactions() {
        return this.http.get(this.transactionsUrl)
            .pipe(tap(_ => console.log('fetched Transactions')), catchError(this.handleError('getTransactions', [])));
    }
    /** GET Transaction types from the server */
    refreshTransTypes() {
        //console.log(this.http.get(apiUrl+"/transactiontypes").subscribe(res => console.log(res)));
        this.http.get(apiUrl + "/transactiontypes").pipe();
        console.log(this.transTypes);
    }
    saveTT(res) {
        this.transTypes = res;
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
    /** POST: add a new Transaction to the server */
    addTransaction(Transaction) {
        return this.http.post(this.transactionsUrl, Transaction, this.httpOptions).pipe(tap((newTransaction) => console.log(`added Transaction w/ id=${newTransaction.id}`)), catchError(this.handleError('addTransaction')));
    }
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
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
__decorate([
    Inject(apiUrl)
], TransactionService.prototype, "apiUrl", void 0);
TransactionService = __decorate([
    Injectable({ providedIn: 'root' })
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction.service.js.map