import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormListPresentationComponent } from './add-form-list-presentation.component';

describe('AddFormListPresentationComponent', () => {
  let component: AddFormListPresentationComponent;
  let fixture: ComponentFixture<AddFormListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
