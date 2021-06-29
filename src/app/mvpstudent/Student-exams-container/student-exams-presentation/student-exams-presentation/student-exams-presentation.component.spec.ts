import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamsPresentationComponent } from './student-exams-presentation.component';

describe('StudentExamsPresentationComponent', () => {
  let component: StudentExamsPresentationComponent;
  let fixture: ComponentFixture<StudentExamsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
