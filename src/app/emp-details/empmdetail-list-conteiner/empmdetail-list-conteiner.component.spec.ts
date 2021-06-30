import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmdetailListConteinerComponent } from './empmdetail-list-conteiner.component';

describe('EmpmdetailListConteinerComponent', () => {
  let component: EmpmdetailListConteinerComponent;
  let fixture: ComponentFixture<EmpmdetailListConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmdetailListConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmdetailListConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
