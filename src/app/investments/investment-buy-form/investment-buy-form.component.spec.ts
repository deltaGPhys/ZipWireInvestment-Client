import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentBuyFormComponent } from './investment-buy-form.component';

describe('InvestmentBuyFormComponent', () => {
  let component: InvestmentBuyFormComponent;
  let fixture: ComponentFixture<InvestmentBuyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentBuyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
