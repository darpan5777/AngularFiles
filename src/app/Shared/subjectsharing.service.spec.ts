import { TestBed } from '@angular/core/testing';

import { SubjectsharingService } from './subjectsharing.service';

describe('SubjectsharingService', () => {
  let service: SubjectsharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
