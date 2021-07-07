import { TestBed } from '@angular/core/testing';

import { BankaccountFormPresenterService } from './bankaccount-form-presenter.service';

describe('BankaccountFormPresenterService', () => {
  let service: BankaccountFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankaccountFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
