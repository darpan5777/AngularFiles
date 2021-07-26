import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkangularComponent } from './cdkangular.component';

describe('CdkangularComponent', () => {
  let component: CdkangularComponent;
  let fixture: ComponentFixture<CdkangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
