import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablePresentationComponent } from './datatable-presentation.component';

describe('DatatablePresentationComponent', () => {
  let component: DatatablePresentationComponent;
  let fixture: ComponentFixture<DatatablePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatablePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
