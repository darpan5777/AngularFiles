import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPresentationComponent } from './address-presentation.component';

describe('AddressPresentationComponent', () => {
  let component: AddressPresentationComponent;
  let fixture: ComponentFixture<AddressPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
