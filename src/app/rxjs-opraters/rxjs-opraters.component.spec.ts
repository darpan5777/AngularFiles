import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOpratersComponent } from './rxjs-opraters.component';

describe('RxjsOpratersComponent', () => {
  let component: RxjsOpratersComponent;
  let fixture: ComponentFixture<RxjsOpratersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOpratersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOpratersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
