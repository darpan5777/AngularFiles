import { TestBed } from '@angular/core/testing';

import { BankaccountListPresenterService } from './bankaccount-list-presenter.service';

describe('BankaccountListPresenterService', () => {
  let service: BankaccountListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankaccountListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
