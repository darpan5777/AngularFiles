import { TestBed } from '@angular/core/testing';

import { AddressPresenterService } from './address-presenter.service';

describe('AddressPresenterService', () => {
  let service: AddressPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
