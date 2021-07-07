import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountListPresentationComponent } from './bankaccount-list-presentation.component';

describe('BankaccountListPresentationComponent', () => {
  let component: BankaccountListPresentationComponent;
  let fixture: ComponentFixture<BankaccountListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankaccountListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
