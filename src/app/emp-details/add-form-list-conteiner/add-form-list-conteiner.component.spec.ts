import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormListConteinerComponent } from './add-form-list-conteiner.component';

describe('AddFormListConteinerComponent', () => {
  let component: AddFormListConteinerComponent;
  let fixture: ComponentFixture<AddFormListConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormListConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormListConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
