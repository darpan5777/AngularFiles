import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmdetailListPresentationComponent } from './empmdetail-list-presentation.component';

describe('EmpmdetailListPresentationComponent', () => {
  let component: EmpmdetailListPresentationComponent;
  let fixture: ComponentFixture<EmpmdetailListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmdetailListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmdetailListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
