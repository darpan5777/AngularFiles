import { TestBed } from '@angular/core/testing';

import { EmpmdetailListPresenterService } from './empmdetail-list-presenter.service';

describe('EmpmdetailListPresenterService', () => {
  let service: EmpmdetailListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpmdetailListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
