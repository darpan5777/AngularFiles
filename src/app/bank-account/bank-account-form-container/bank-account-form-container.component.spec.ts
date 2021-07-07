import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountFormContainerComponent } from './bank-account-form-container.component';

describe('BankAccountFormContainerComponent', () => {
  let component: BankAccountFormContainerComponent;
  let fixture: ComponentFixture<BankAccountFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
