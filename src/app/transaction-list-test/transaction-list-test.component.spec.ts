import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListTestComponent } from './transaction-list-test.component';

describe('TransactionListTestComponent', () => {
  let component: TransactionListTestComponent;
  let fixture: ComponentFixture<TransactionListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
