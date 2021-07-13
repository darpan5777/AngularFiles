import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletcontextComponent } from './outletcontext.component';

describe('OutletcontextComponent', () => {
  let component: OutletcontextComponent;
  let fixture: ComponentFixture<OutletcontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletcontextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletcontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
