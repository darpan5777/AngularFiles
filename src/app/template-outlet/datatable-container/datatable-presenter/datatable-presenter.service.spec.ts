import { TestBed } from '@angular/core/testing';

import { DatatablePresenterService } from './datatable-presenter.service';

describe('DatatablePresenterService', () => {
  let service: DatatablePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatablePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
