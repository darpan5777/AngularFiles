import { TestBed } from '@angular/core/testing';

import { EmployeesPresenterService } from './employees-presenter.service';

describe('EmployeesPresenterService', () => {
  let service: EmployeesPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
