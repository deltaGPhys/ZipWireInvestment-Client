import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let TransactionListTestComponent = class TransactionListTestComponent {
    constructor(transactionService) {
        this.transactionService = transactionService;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    ngOnInit() {
        console.log("here");
        this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
    }
};
TransactionListTestComponent = __decorate([
    Component({
        selector: 'app-transaction-list-test',
        templateUrl: './transaction-list-test.component.html',
        styleUrls: ['./transaction-list-test.component.css']
    })
], TransactionListTestComponent);
export { TransactionListTestComponent };
//# sourceMappingURL=transaction-list-test.component.js.map