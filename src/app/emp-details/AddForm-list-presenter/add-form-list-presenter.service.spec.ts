import { TestBed } from '@angular/core/testing';

import { AddFormListPresenterService } from './add-form-list-presenter.service';

describe('AddFormListPresenterService', () => {
  let service: AddFormListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFormListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
