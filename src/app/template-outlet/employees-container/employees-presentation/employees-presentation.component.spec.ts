import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPresentationComponent } from './employees-presentation.component';

describe('EmployeesPresentationComponent', () => {
  let component: EmployeesPresentationComponent;
  let fixture: ComponentFixture<EmployeesPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
