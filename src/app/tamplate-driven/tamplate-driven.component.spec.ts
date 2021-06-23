import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateDrivenComponent } from './tamplate-driven.component';

describe('TamplateDrivenComponent', () => {
  let component: TamplateDrivenComponent;
  let fixture: ComponentFixture<TamplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
