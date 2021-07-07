import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountFormPresentationComponent } from './bankaccount-form-presentation.component';

describe('BankaccountFormPresentationComponent', () => {
  let component: BankaccountFormPresentationComponent;
  let fixture: ComponentFixture<BankaccountFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankaccountFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
