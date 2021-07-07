import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountListContainerComponent } from './bank-account-list-container.component';

describe('BankAccountListContainerComponent', () => {
  let component: BankAccountListContainerComponent;
  let fixture: ComponentFixture<BankAccountListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
