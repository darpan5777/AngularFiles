import { TestBed } from '@angular/core/testing';

import { StudentExamsPresenterService } from './student-exams-presenter.service';

describe('StudentExamsPresenterService', () => {
  let service: StudentExamsPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentExamsPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
